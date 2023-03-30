import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from "../../pages/auth/login/login.component";
import {SignUpComponent} from "../../pages/auth/sign-up/sign-up.component";
import {ForgotPasswordComponent} from "../../pages/auth/forgot-password/forgot-password.component";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    TranslateModule
  ]
})
export class AuthModule {
}
