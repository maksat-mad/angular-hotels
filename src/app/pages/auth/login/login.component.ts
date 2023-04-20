import {Component, inject} from '@angular/core';
import {LoginInfo} from "../../../models/auth/AuthInfo";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  hide = true;
  isLoading = false;
  hasError = false;

  loginInfo: LoginInfo = {
    email: '',
    password: ''
  }

  login() {
    this.isLoading = true;
    this.authService.login(this.loginInfo.email, this.loginInfo.password)
      .then(() => this.router.navigate(['/hotels']))
      .catch(() => {
        this.hasError = true;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}
