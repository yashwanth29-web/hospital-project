import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { authGuard } from './auth.guard';
import { HomeComponent } from './components/home/home.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
    {path: '', redirectTo: '/login', pathMatch: 'full'  },
    {path:'login',component: LoginComponent},
    {path:'home', component: HomeComponent},
    {path: 'appointment', component: AppointmentComponent},
    {path: 'about', component: AboutComponent},
    {path:'dashboard', component: DashboardComponent,canActivate: [authGuard] }, // Protect the dashboard route with authGuard
    {path: '**', redirectTo: '/home'  } // Wildcard route for a 404 page   
]; 
