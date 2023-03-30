import { Component } from '@angular/core';
import {LoginInfo} from "../../../modals/auth/LoginInfo";
import {NgForm} from "@angular/forms";

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
