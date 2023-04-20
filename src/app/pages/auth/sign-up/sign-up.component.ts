import {Component, inject} from '@angular/core';
import {SignUpInfo} from "../../../models/auth/AuthInfo";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent {
  authService = inject(AuthService);
  hide = true;
  hideConfirm = true;
  confirmPassword = '';
  isLoading = false;
  hasError = false;
  isSuccess = false;

  signUpInfo: SignUpInfo = {
    firstname: '',
    lastname: '',
    gender: '',
    phone: '',
    email: '',
    password: ''
  }

  signUp() {
    this.isLoading = true;
    this.authService.signUp(this.signUpInfo.email, this.signUpInfo.password)
      .then(() => {
        this.isSuccess = true;
      })
      .catch(() => {
        this.hasError = true;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  passwordChange(password: string) {
    this.signUpInfo.password = password;
    this.confirmPassword = '';
  }
}
