import {Component, inject} from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent {
  authService = inject(AuthService);
  email = '';
  isLoading = false;
  hasError = false;
  isSuccess = false;

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
