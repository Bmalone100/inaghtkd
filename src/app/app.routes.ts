import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { InstructorsComponent } from './instructors/instructors.component';
import { ClassesComponent } from './classes/classes.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'instructors', component: InstructorsComponent},
    { path: 'classes', component: ClassesComponent},
    { path: 'admin', component: AdminComponent}
  ];
  