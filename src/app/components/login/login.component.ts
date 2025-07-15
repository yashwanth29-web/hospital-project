import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoginserviceService } from '../../services/loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],  // use `styleUrls` instead of `styleUrl`
})
export class LoginComponent implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';
  logEmail: string = '';
  logPassword: string = '';
  constructor(private loginService: LoginserviceService, private router: Router) {}

  ngOnInit(): void {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    if (signUpButton && container && signInButton) {
      signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
      });

      signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
      });
    }
  }


  signUp(): void {
    const reqBody = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    this.loginService.registerUser(reqBody).subscribe({
      next: (response) => {
        console.log('User registered successfully:', response);
        this.router.navigate(['/login']); // Navigate to login page after successful registration
      },
      error: (error) => {
        console.error('Error during registration:', error);
        alert('Registration failed. Please try again.');
      }
    }
     
    );
  }
  login(): void {
    const reqBody = {
      email: this.logEmail,
      password: this.logPassword
    };

    this.loginService.loginUser(reqBody).subscribe({
      next: (response) => {
        console.log('User logged in successfully:', response);
        localStorage.setItem('token', response.token); // Store the token in local storage
        this.router.navigate(['/dashboard']); // Navigate to dashboard after successful login
      },
      error: (error) => {
        console.error('Error during login:', error);
        alert('Login failed. Please check your credentials and try again.');
      }
    });
  } 
  
}
