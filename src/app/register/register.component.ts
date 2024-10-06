import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule , FormsModule ,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerData:any = {
    userName :'',
    email: '',
    password :'',
    phone :''
  }
  constructor( private http:HttpClient ,private router:Router) { }


  sendData(){
    try {
      
      // // Convert form data to FormData object
      // const target = e.target as HTMLFormElement;
      // const formData = new FormData(target);
      // console.log(formData)
  
      // Send the FormData object via HTTP POST request
      this.http.post('http://localhost:3050/user/register/', this.registerData).subscribe({
        next: (data: any) => {
          console.log('Response from server:', data);
          this.router.navigate(['/login']);
          
        },
        error: (err) => {
          console.error('Error during form submission:', err);
        }
      });
  
    } catch (error) {
      console.error('Error in form submission:', error);
    }
  }

}
