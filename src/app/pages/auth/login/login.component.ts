import {Component, inject} from '@angular/core';
import {LoginInfo} from "../../../models/auth/AuthInfo";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  authService = inject(AuthService);
  hide = true;

  loginInfo: LoginInfo = {
    email: '',
    password: ''
  }

  login() {
    this.authService.login(this.loginInfo.email, this.loginInfo.password);
  }
}
