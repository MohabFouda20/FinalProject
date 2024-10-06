import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule, CommonModule],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css',
})
export class AdminPageComponent implements OnInit {
  displayUsers: boolean = false;
  displayMenuItems: boolean = false;
  isCreateFormVisible: boolean = false;
  isEditFormVisible: boolean = false;
  isDeleteFormVisible: boolean = false;
  
  formData: any = {
    name: '',
    image: '',
    price: 0,
    category: '',
    description: ''
  };
  
  editingItem: any = null;
  deletingItem: any = null;

  users: any[] = [];
  menuItems: any[] = [];
  totalUsers: number = 0;
  totalProducts: number = 0;

  constructor(private http: HttpClient) {}

  showCreateForm() {
    this.isCreateFormVisible = true;
    this.isEditFormVisible = false;
    this.isDeleteFormVisible = false;
    this.formData = {
      name: '',
      image: '',
      price: 0,
      category: '',
      description: ''
    };
  }

  showEditForm(item: any) {
    this.isCreateFormVisible = false;
    this.isEditFormVisible = true;
    this.isDeleteFormVisible = false;
    this.editingItem = item;
    this.formData = { ...item };
  }

  showDeleteForm(item: any) {
    this.isCreateFormVisible = false;
    this.isEditFormVisible = false;
    this.isDeleteFormVisible = true;
    this.deletingItem = item;
  }

  onCreateSubmit() {
    console.log(this.formData)
    this.http.post('http://localhost:3050/admin/menu', this.formData).subscribe({
      next: (response: any) => {
        console.log('Item created:', response);
        this.isCreateFormVisible = false;
      },
      error: (error) => console.error('Error creating item:', error)
    });
    this.http.get('http://localhost:3050/menu').subscribe({});

  }

  onEditSubmit() {
    if (this.editingItem && this.editingItem._id) {
      this.http.patch(`http://localhost:3050/admin/menu/${this.editingItem._id}`, this.formData).subscribe({
        next: (response: any) => {
          console.log('Item updated:', response);
          this.getMenuItems();
          this.isEditFormVisible = false;
        },
        error: (error) => console.error('Error updating item:', error)
      });
    }
  }

  onDeleteSubmit() {
    if (this.deletingItem && this.deletingItem._id) {
      this.http.delete(`http://localhost:3050/admin/menu/${this.deletingItem._id}`).subscribe({
        next: (response: any) => {
          console.log('Item deleted:', response);
          this.getMenuItems();
          this.isDeleteFormVisible = false;
        },
        error: (error) => console.error('Error deleting item:', error)
      });
    }
  }

  getUsers() {
    this.http.get('http://localhost:3050/user').subscribe({
      next: (data: any) => {
        this.users = data;
        this.totalUsers = data.length;
      },
      error: (error) => console.error('Error fetching users:', error)
    });
  }

  getMenuItems() {
    this.http.get('http://localhost:3050/menu').subscribe({
      next: (data: any) => {
        this.menuItems = data;
        this.totalProducts = data.length;
      },
      error: (error) => console.error('Error fetching menu items:', error)
    });
  }

  changeDisplayUsers() {
    this.displayMenuItems = false;
    this.displayUsers = !this.displayUsers;
  }

  changeDisplayMenuItems() {
    this.displayUsers = false;
    this.displayMenuItems = !this.displayMenuItems;
  }

  ngOnInit(): void {
    this.getUsers();
    this.getMenuItems();
  }
}