import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";
import {LoginInfo} from "../../../modals/auth/AuthInfo";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.scss']
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
