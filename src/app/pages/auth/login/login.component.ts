import {Component, inject} from '@angular/core';
import {LoginInfo} from "../../../models/auth/AuthInfo";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  authService = inject(AuthService);
  router = inject(Router);
  location = inject(Location);
  hide = true;
  isLoading = false;
  hasError = false;

  loginInfo: LoginInfo = {
    email: '',
    password: ''
  }

  login() {
    this.hasError = false;
    this.isLoading = true;
    this.authService.login(this.loginInfo.email, this.loginInfo.password)
      .then(() => {
        if (document.referrer) {
          this.location.back();
        }
        this.router.navigate(['/profile']);
      })
      .catch(() => {
        this.hasError = true;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}
