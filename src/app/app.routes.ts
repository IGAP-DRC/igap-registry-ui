import { Routes } from '@angular/router';
import { LoginComponent } from './presentation/auth-ui/login/login.component';

export const routes: Routes = [
    {path:"", pathMatch:"full", redirectTo: "auth/login"},
    {path: "auth/login", component: LoginComponent}
];
