import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ClassesComponent } from './classes/classes.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'inaghtkd', component: HomeComponent },
    { path: 'inaghtkd/about', component: AboutComponent },
    { path: 'inaghtkd/contact', component: ContactComponent },
    { path: 'inaghtkd/classes', component: ClassesComponent},
    { path: 'inaghtkd/admin', component: AdminComponent}
  ];
  