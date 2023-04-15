import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {LoginInfo} from "../../../models/auth/AuthInfo";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  hide = true;

  loginInfo: LoginInfo = {
    email: '',
    password: ''
  }

  login(form: NgForm) {
    console.log(form.value)
  }
}
