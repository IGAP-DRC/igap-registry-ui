import { Routes } from '@angular/router';
import { LoginComponent } from './presentation/auth-ui/login/login.component';
import { RegisterComponent } from './presentation/auth-ui/register/register.component';
import { DashboardComponent } from './presentation/dashboard/dashboard.component';
import { AgentsComponent } from './presentation/pages/agents/agents.component';

export const routes: Routes = [
    {path:"", pathMatch:"full", redirectTo: "auth/login"},
    {path: "auth/login", component: LoginComponent},
    {path: "auth/register", component: RegisterComponent},
    {path: "dashboard/home", component: DashboardComponent},
    {path: "dashboard/agents", component: AgentsComponent},
];
