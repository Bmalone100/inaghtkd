import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { environment } from '../environment.prod';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule, MatListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'inaghtkd';
  isSidenavOpen = false;
  public logo1: string = `${environment.assetLogoPath}ita_logo1.png`;
  public logo2: string = `${environment.assetLogoPath}ita_logo2.png`;
  public logo3: string = `${environment.assetLogoPath}itf.png`;
  public homeRoute: string = `${environment.homePath}`;
  public aboutRoute: string = `${environment.aboutPath}`;
  public classesRoute: string = `${environment.classesPath}`;
  public contactRoute: string = `${environment.contactPath}`;

}
