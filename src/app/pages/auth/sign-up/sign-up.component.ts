import { Component } from '@angular/core';
import {SignUpInfo} from "../../../modals/auth/AuthInfo";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['../auth.scss']
})
export class SignUpComponent {
  hide = true;
  hideConfirm = true;
  confirmPassword = '';

  signUpInfo: SignUpInfo = {
    firstname: '',
    lastname: '',
    gender: '',
    phone: '',
    email: '',
    password: ''
  }

  signUp(form: NgForm) {
    console.log(form.value)
  }
}
