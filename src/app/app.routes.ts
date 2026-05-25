import { Routes } from '@angular/router';
import { LoginComponent } from './pages/authentifications/login/login.component';
import { OtpMethodComponent } from './pages/authentifications/otp-method/otp-method.component';
import { OtpVerifyComponent } from './pages/authentifications/otp-verify/otp-verify.component';
import { DashboardComponent } from './pages/headers/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', redirectTo: 'gargoTrust/login', pathMatch: 'full' },
  { path: 'gargoTrust/login', component: LoginComponent },
  { path: 'gargoTrust/otp-method', component: OtpMethodComponent },
  { path: 'gargoTrust/otp-verify', component: OtpVerifyComponent },
  { path: 'gargoTrust/dashboard', component: DashboardComponent },
];
