import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TableformComponent } from './tableform/tableform.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'tableform',
        component:TableformComponent
    }
    
];
