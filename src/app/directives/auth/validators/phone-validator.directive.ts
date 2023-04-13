import { Directive } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";

@Directive({
  selector: '[appPhoneValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PhoneValidatorDirective,
      multi: true,
    },
  ]
})
export class PhoneValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const phone = control.value as string;
    if (phone === null || phone.length === 0) {
      return {
        msg: 'Phone number is required'
      };
    }
    const regex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
    if (!regex.test(phone)) {
      return {
        msg: 'Invalid phone number'
      };
    }
    return null;
  }
}
