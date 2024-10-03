import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,NavComponent , FooterComponent , RouterLink, RouterLinkActive ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'FinalProject';
  showNavbar: boolean = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      const hiddenNavbarRoutes = ['/login', '/register' , '/admin', '/admin/viewUsers' , '/admin/FullMenu']; // Example routes

      this.showNavbar = !hiddenNavbarRoutes.includes(this.router.url)
    });
  }
}
