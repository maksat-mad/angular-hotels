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

  signUpInfo: SignUpInfo = {
    firstname: '',
    lastname: '',
    gender: '',
    phone: '',
    email: '',
    password: ''
  }

  signUp() {
    this.authService.signUp(this.signUpInfo.email, this.signUpInfo.password);
  }

  passwordChange(password: string) {
    this.signUpInfo.password = password;
    this.confirmPassword = '';
  }
}
