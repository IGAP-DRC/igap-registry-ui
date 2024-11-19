import { Routes } from '@angular/router';
import { LoginComponent } from './presentation/auth-ui/login/login.component';
import { RegisterComponent } from './presentation/auth-ui/register/register.component';

export const routes: Routes = [
    {path:"", pathMatch:"full", redirectTo: "auth/login"},
    {path: "auth/login", component: LoginComponent},
    {path: "auth/register", component: RegisterComponent}
];
