import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { environment } from '../../environment.prod';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule]
})
export class HomeComponent {
  public backgroundImage: string = `${environment.assetPath}tkdbg.jpg`;
}
