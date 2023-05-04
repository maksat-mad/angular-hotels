import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PasswordValidatorDirective} from "../../directives/auth/validators/password-validator.directive";
import {ConfirmPasswordValidatorDirective} from "../../directives/auth/validators/confirm-password-validator.directive";

@NgModule({
  declarations: [
    PasswordValidatorDirective,
    ConfirmPasswordValidatorDirective
  ],
  exports: [
    PasswordValidatorDirective,
    ConfirmPasswordValidatorDirective
  ],
  imports: [
    CommonModule
  ]
})
export class AuthSharedModule {
}
