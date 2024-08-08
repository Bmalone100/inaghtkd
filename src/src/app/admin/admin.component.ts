import { Component } from '@angular/core';
import * as crypto from 'crypto-js';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  password: string = '';
  isAuthenticated: boolean = false;
  loginError: boolean = false;
  bannerText: string = '';

  // The hashed version of your password (e.g., 'adminpassword')
  private readonly hashedPassword = 'd5728824bc1aeba2b205bbab0851c299125ff47c';

  login(): void {
    const hashedInputPassword = crypto.SHA1(this.password).toString();
    if (hashedInputPassword === this.hashedPassword) {
      this.isAuthenticated = true;
      this.loginError = false;
    } else {
      this.isAuthenticated = false;
      this.loginError = true;
    }
  }

  updateBanner(): void {
    // Here you would typically send a request to your backend to update the banner text
    console.log('Banner text updated to:', this.bannerText);
  }
}
