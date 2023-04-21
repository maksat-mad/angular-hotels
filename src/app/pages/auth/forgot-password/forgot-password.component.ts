import {Component, inject, OnInit} from '@angular/core';
import {CurrentPageService} from "../../../services/current-page.service";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent implements OnInit {
  currentPageService = inject(CurrentPageService);
  authService = inject(AuthService);
  email = '';
  isLoading = false;
  hasError = false;
  isSuccess = false;

  ngOnInit(): void {
    this.currentPageService.currentPage = 4;
  }

  resetPassword() {
    this.hasError = false;
    this.isSuccess = false;
    this.isLoading = true;
    this.authService.sendPasswordResetEmail(this.email)
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
}
