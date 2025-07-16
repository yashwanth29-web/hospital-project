import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [RouterOutlet, NavbarComponent, CommonModule], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'login_authentication';
  isLoggedIn = false;

  ngOnInit() {
    this.isLoggedIn = !!localStorage.getItem('token'); // Adjust this based on your login logic
  }
}
