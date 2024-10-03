import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor (private http:HttpClient){}
  credintial:any
  sendData(e:any){
    try{
      e.preventDefault()
    this.credintial = new FormData(e.target)
    console.log(this.credintial.get('Email'))
    console.log(this.credintial.get('Password'))
    this.http.post('http://localhost:3050/user/login',this.credintial).subscribe({
      next:(data:any)=>{
        console.log('Response from server:',data)
      },
      error:(err)=>{
        console.error('Error during form submission:',err)
      }
    })
      
    }catch(error){
      console.error('Error in form submission:',error)
  }

}}
