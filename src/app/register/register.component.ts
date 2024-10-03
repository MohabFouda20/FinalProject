import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  constructor( private http:HttpClient ,private router:Router) { }
  formData:any;


  sendData(e:any){
    try {
      e.preventDefault();
      
      // Convert form data to FormData object
      const target = e.target as HTMLFormElement;
      const formData = new FormData(target);
  
      // Send the FormData object via HTTP POST request
      this.http.post('http://localhost:3050/user/register', formData).subscribe({
        next: (data: any) => {
          console.log('Response from server:', data);
        },
        error: (err) => {
          console.error('Error during form submission:', err);
        }
      });
  
    } catch (error) {
      console.error('Error in form submission:', error);
    }
    this.router.navigate(['/login']);
  }

}
