import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css',
})
export class AdminPageComponent implements OnInit {
  displayUsers: boolean = false;
  displayMenuItems: boolean = false;
  isFormVisible: boolean = false;
  formAction: string = '';
  formData: any;
  editingItemIndex: number | null = null;

  users: any;
  menuItems: any;
  totalUsers: number = 0;
  totalProducts: number = 0;

  constructor(private http: HttpClient) {}

  addItem() {
    this.isFormVisible = true;
    this.formAction = 'Add';
    this.formData = { name: '', price: '', category: '' }; // Reset form data
    }
  

  // Edit Item - Open Form with Pre-filled Data
  editItem(item: any) {
    this.isFormVisible = true;
    this.formAction = 'Edit';
    this.formData = { ...item };
    this.editingItemIndex = this.menuItems.indexOf(item);
  }

  onSubmit(e: any) {
    if (this.formAction === 'Add') {
      // Add the new item to the list

      try{
        this.http.post('http://localhost:3050/menu', this.formData).subscribe((data: any) => {
          console.log(data);
        })
      }catch (error) {
        console.error(error);
      }
      this.menuItems.push({ ...this.formData });
    } else if (this.formAction === 'Edit' && this.editingItemIndex !== null) {
      // Update the item in the list
      this.menuItems[this.editingItemIndex] = { ...this.formData };
    }

    // Hide the form after submission
    this.isFormVisible = false;
    this.formData = { name: '', price: '', category: '' }; // Reset form data
  }

  // Delete Item
  deleteItem(item: any) {
    const index = this.menuItems.indexOf(item);
    if (index > -1) {
      this.menuItems.splice(index, 1);
    }
  }
  getUsers() {
    try {
      this.http.get('http://localhost:3050/user').subscribe((data: any) => {
        this.users = data;
        this.totalUsers = data.length;
      });
    } catch (error) {
      console.error(error);
    }
  }
  getMenuItems() {
    try {
      this.http.get('http://localhost:3050/menu').subscribe((data: any) => {
        this.totalProducts = data.length;
        this.menuItems = data;
      });
    } catch (error) {
      console.error(error);
    }
  }
  chageDisplayUsers() {
    if (this.displayMenuItems) {
      this.displayMenuItems = !this.displayMenuItems;
    }
    this.displayUsers = !this.displayUsers;
    console.log(this.displayUsers);
  }
  chageDisplayMenuItems() {
    if (this.displayUsers) {
      this.displayUsers = !this.displayUsers;
    }
    this.displayMenuItems = !this.displayMenuItems;
    console.log(this.displayMenuItems);
  }
  ngOnInit(): void {
    this.getUsers();
    this.getMenuItems();
  }
}
