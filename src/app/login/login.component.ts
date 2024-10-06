import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule , RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData: any = {
    email: '',
    password: ''
  };

  constructor(private http: HttpClient, private router: Router) { }

  login() {
    console.log('Login Data:', this.loginData);

    this.http.post('http://localhost:3050/user/login', this.loginData).subscribe({
      next: (data: any) => {
        console.log('Login successful:', data);
        // Handle successful login (e.g., store token, navigate to dashboard)
        this.router.navigate(['/home']);
      },
      error: (error) => {
        console.error('Login error:', error);
        // Handle login error (e.g., display error message to user)
      }
    });
  }
}