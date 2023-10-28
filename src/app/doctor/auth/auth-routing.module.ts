import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { DoctorRegisterComponent } from './doctor-register/doctor-register.component';
import { DoctorForgotPasswordComponent } from './doctor-forgot-password/doctor-forgot-password.component';

const routes: Routes = [
  { path: '', component: DoctorLoginComponent },
  { path: 'register', component: DoctorRegisterComponent },
  { path: 'forgot-password', component: DoctorForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
