import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TableformComponent } from './tableform/tableform.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'menu',
    component: MenuComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'tableform',
    component: TableformComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'admin',
    component: AdminPageComponent,

  },
  {
    path: '**',
    redirectTo: '', // redirect to home page
  },
];
