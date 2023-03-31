import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[appPasswordValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PasswordValidatorDirective,
      multi: true,
    },
  ]
})
export class PasswordValidatorDirective implements Validator {

  constructor() {
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const password = control.value as string;
    if (password === null || password.length < 8) {
      return {
        msg: 'Password must be at least 8 characters'
      };
    }
    if (password.search(/\s/) > 0) {
      return {
        msg: 'Password must not contain spaces'
      };
    }
    if (password.search(/[a-z]/i) < 0) {
      return {
        msg: 'Password must contain at least one letter'
      };
    }
    if (password.search(/[0-9]/) < 0) {
      return {
        msg: 'Password must contain at least one digit'
      };
    }
    if (password.search(/[!#$%&?*@]/) < 0) {
      return {
        msg: 'Password must contain at least one special character (!#$%&?*@)'
      };
    }
    return null;
  }
}
