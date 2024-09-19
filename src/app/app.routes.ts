import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TableformComponent } from './tableform/tableform.component';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { PagesComponent } from './pages/pages.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'menu',
        component:MenuComponent
    },
    {
        path:'pages',
        component:PagesComponent
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'tableform',
        component:TableformComponent
    }
    
    
];
