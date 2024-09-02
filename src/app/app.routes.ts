import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ClassesComponent } from './classes/classes.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'Inaghtkd', component: HomeComponent },
    { path: 'Inaghtkd/about', component: AboutComponent },
    { path: 'Inaghtkd/contact', component: ContactComponent },
    { path: 'Inaghtkd/classes', component: ClassesComponent},
    { path: 'Inaghtkd/admin', component: AdminComponent}
  ];
  