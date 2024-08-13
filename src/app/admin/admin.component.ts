import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as crypto from 'crypto-js';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditModeService } from '../services/edit-mode.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [FormsModule, CommonModule, MatSlideToggleModule, MatSelectModule, MatFormFieldModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  editMode = false;
  password: string = '';
  isAuthenticated: boolean = false;
  loginError: boolean = false;
  selectedPage: string = '';
  selectedImage: { alias: string; src: string } | null = null;
  fileInput: HTMLInputElement | null = null;

  private readonly hashedPassword = 'd5728824bc1aeba2b205bbab0851c299125ff47c';

  pages = [
    { route: 'home', label: 'Home' },
    { route: 'about', label: 'About' },
    { route: 'contact', label: 'Contact' },
    { route: 'instructors', label: 'Instructors' },
    { route: 'classes', label: 'Classes' },
  ];

  images = [
    { alias: 'Home Banner', src: 'assets/webImages/Cover.jpg' },
    // Add other images here with aliases
  ];

  constructor(
    private editModeService: EditModeService,
    private router: Router
  ) {}

  toggleEditMode(event: any) {
    this.editMode = event.checked;
    this.editModeService.toggleEditMode(this.editMode);
  }

  navigateToPage(): void {
    if (this.editMode && this.selectedPage) {
      this.router.navigate([this.selectedPage]);
    }
  }
  
  selectImage(image: { alias: string; src: string }) {
    this.selectedImage = image;
    this.fileInput?.click(); // Automatically open file picker
  }

  saveImage(newSrc: string) {
    if (this.selectedImage) {
      this.selectedImage.src = newSrc;
      // Optionally, you can also save this change to a server or local storage
      console.log('Saved image source:', this.selectedImage.src);
    }
  }

  abbreviatedSrc(src: string): string {
    const maxLength = 30; 
    return src.length > maxLength ? src.slice(0, maxLength) + '...' : src;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const reader = new FileReader();
      
      reader.onload = () => {
        if (this.selectedImage) {
          this.selectedImage.src = reader.result as string;
        }
      };

      reader.readAsDataURL(file);
    }
  }

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
}
