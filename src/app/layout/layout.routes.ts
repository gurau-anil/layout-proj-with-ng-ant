import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { WelcomeComponent } from '../pages/welcome/welcome.component';

export const LAYOUT_ROUTES: Routes = [
  { 
    path: '', 
    component: LayoutComponent,
    children:[
      {path:'dashboard', redirectTo:"dashboard/welcome"},
      {path:'dashboard/welcome', component:WelcomeComponent}
    ]
   },
];
