import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent implements OnInit {
  isLogged: boolean = false;
  user = localStorage.getItem('jwt');
  constructor() {}
  
  // changeLoginStatus() {
  //   if (this.user) {
  //     this.isLogged = true;
  //   }
  // }
  checkLoginStatus() {
    const token = localStorage.getItem('jwt');
    this.isLogged = !!token;
  }
  logout(){
    localStorage.removeItem('jwt');
    this.isLogged = false;
  }
  ngOnInit() {
    this.checkLoginStatus();
  }
}
