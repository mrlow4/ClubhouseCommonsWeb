import { Routes } from '@angular/router';
import { Admin } from './admin/admin';
import { Login } from './login/login';

export const routes: Routes = [
    {
        path: 'admin',
        component: Admin
    },
    {
        path: 'login',
        component: Login
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
