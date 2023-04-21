import {Component, inject, OnInit} from '@angular/core';
import {SignUpInfo} from "../../../models/auth/AuthInfo";
import {AuthService} from "../../../services/auth.service";
import {CurrentPageService} from "../../../services/current-page.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent implements OnInit {
  currentPageService = inject(CurrentPageService);
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

  ngOnInit(): void {
    this.currentPageService.currentPage = 4;
  }

  signUp() {
    this.hasError = false;
    this.isLoading = true;
    this.authService.signUp(this.signUpInfo.email, this.signUpInfo.password)
      .then(() => {
        this.isSuccess = true;
      })
      .catch(() => {
        this.hasError = true;
        this.isSuccess = false;
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
