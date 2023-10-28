import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { DoctorLoginComponent } from './doctor-login/doctor-login.component';
import { DoctorRegisterComponent } from './doctor-register/doctor-register.component';
import { DoctorForgotPasswordComponent } from './doctor-forgot-password/doctor-forgot-password.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DoctorLoginComponent,
    DoctorRegisterComponent,
    DoctorForgotPasswordComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, SharedModule],
})
export class AuthModule {}
