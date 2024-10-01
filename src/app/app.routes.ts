import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TableformComponent } from './tableform/tableform.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { ContactComponent } from './contact/contact.component';

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
    children: [
      {
        path: 'all',
        component: MenuComponent,
      },
      {
        path: 'breakfast',
        component: MenuComponent,
      },
      {
        path: 'dessert',
        component: MenuComponent,
      },
      {
        path: 'MainDishes',
        component: MenuComponent,
      },
      {
        path: 'drinks',
        component: MenuComponent,
      },
    ],
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
    path: '**',
    redirectTo: '', // redirect to home page
  },
];
