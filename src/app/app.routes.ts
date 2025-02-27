import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';

export const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/layout' },
  { path: '', loadChildren: () => import('./layout/layout.routes').then(m => m.LAYOUT_ROUTES) },
  // { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.routes').then(m => m.WELCOME_ROUTES) },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' },
];
