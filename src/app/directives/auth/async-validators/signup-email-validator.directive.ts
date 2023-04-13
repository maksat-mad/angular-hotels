import {Directive, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AbstractControl, NG_ASYNC_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';
import {map} from 'rxjs';

@Directive({
  selector: '[appSignupEmailValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: SignupEmailValidatorDirective,
      multi: true
    }
  ]
})
export class SignupEmailValidatorDirective implements Validator {
  private httpClient = inject(HttpClient);
  validate(control: AbstractControl): ValidationErrors | null {
    return this.httpClient.get<any[]>(`https://jsonplaceholder.typicode.com/users?email=${control.value}`).pipe(
      map(users => users.length ? { msg: 'Email is already registered in the system' }: null)
    );
  }
}
