import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from "../../pages/auth/login/login.component";
import {SignUpComponent} from "../../pages/auth/sign-up/sign-up.component";
import {ForgotPasswordComponent} from "../../pages/auth/forgot-password/forgot-password.component";
import {TranslateModule} from "@ngx-translate/core";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatRadioModule} from "@angular/material/radio";
import {FormsModule} from "@angular/forms";
import {EmailValidatorDirective} from "../../directives/auth/email-validator.directive";
import {PasswordValidatorDirective} from "../../directives/auth/password-validator.directive";
import {PhoneValidatorDirective} from '../../directives/auth/phone-validator.directive';
import {ConfirmPasswordValidatorDirective} from '../../directives/auth/confirm-password-validator.directive';
import {SignupEmailValidatorDirective} from '../../directives/auth/signup-email-validator.directive';

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    EmailValidatorDirective,
    PasswordValidatorDirective,
    PhoneValidatorDirective,
    ConfirmPasswordValidatorDirective,
    SignupEmailValidatorDirective
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    TranslateModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule
  ]
})
export class AuthModule {
}
