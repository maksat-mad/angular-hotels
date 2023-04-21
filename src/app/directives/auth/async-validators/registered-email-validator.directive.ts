import {Directive, inject} from '@angular/core';
import {AbstractControl, NG_ASYNC_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs";

@Directive({
  selector: '[appRegisteredEmailValidator]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: RegisteredEmailValidatorDirective,
      multi: true
    }
  ]
})
export class RegisteredEmailValidatorDirective implements Validator {

  private httpClient = inject(HttpClient);
  validate(control: AbstractControl): ValidationErrors | null {
    return this.httpClient.get<any[]>(`https://jsonplaceholder.typicode.com/users?email=${control.value}`).pipe(
      map(users => users.length ? { msg: 'This email address is not registered in the system' }: null)
    );
  }
}
