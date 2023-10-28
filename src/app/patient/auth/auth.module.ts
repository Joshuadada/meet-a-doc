import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { PatientLoginComponent } from './patient-login/patient-login.component';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { PatientForgotPasswordComponent } from './patient-forgot-password/patient-forgot-password.component';


@NgModule({
  declarations: [
    AuthComponent,
    PatientLoginComponent,
    PatientRegisterComponent,
    PatientForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
