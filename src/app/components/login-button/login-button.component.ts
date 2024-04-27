import { Component } from '@angular/core';

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrl: './login-button.component.scss'
})
export class LoginButtonComponent {
  login() {
    // This is a placeholder action to simulate login.
    // Replace this with your Identity Provider (IdP) login URL.
    window.location.href = 'https://example.com/login';
  }
}
