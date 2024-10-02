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
  formData:any
  getData(e:any){
    e.preventDefault()
    this.formData = new FormData(e.target)
    console.log(this.formData.get('Email'))
    console.log(this.formData.get('Password'))
  }

}
