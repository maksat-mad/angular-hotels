import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[appConfirmPasswordValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: ConfirmPasswordValidatorDirective,
      multi: true,
    },
  ]
})
export class ConfirmPasswordValidatorDirective implements Validator {
  @Input() appConfirmPasswordValidator: string | undefined;
  validate(control: AbstractControl): ValidationErrors | null {
    const password = control.value as string;
    if (password !== this.appConfirmPasswordValidator) {
      return {
        msg: 'Passwords do not match'
      }
    }
    return null;
  }
}
