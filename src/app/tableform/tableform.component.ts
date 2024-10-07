import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-tableform',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tableform.component.html',
  styleUrl: './tableform.component.css'
})
export class TableformComponent implements OnInit {
 formData: any;
 checkOnLogin: boolean = false;

  getData(e: any) {
    e.preventDefault(); 
    this.formData = new FormData(e.target); 
    console.log(this.formData.get('Name'));
    console.log(this.formData.get('Date'));
    console.log(this.formData.get('Time'));
    console.log(this.formData.get('Phone'));
    console.log(this.formData.get('TotalPerson'));
  }
  constructor(private router: Router){}
  ngOnInit() {
    if (localStorage.getItem('jwt')) {
      this.checkOnLogin = true;
    }
    else{
      this.router.navigate(['/login']);
    }
  }



}
