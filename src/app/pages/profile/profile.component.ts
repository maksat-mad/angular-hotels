import {Component} from '@angular/core';
import {ChangePassword} from "../../models/auth/AuthInfo";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  changePasswordSubmitted = false;
  isLoading = false;
  hasError = false;
  hidePassword = true;
  hidePasswordConfirm = true;
  panelOpenState = false;
  confirmPassword = '';
  changePasswordInfo: ChangePassword = {
    email: '',
    password: ''
  }

  changePasswordSubmittedState() {
    this.changePasswordSubmitted = false;
    this.isLoading = false;
    this.hasError = false;
  }

  passwordChangeHandle(password: string) {
    this.changePasswordInfo.password = password;
    this.confirmPassword = '';
  }

  changePassword() {
    this.isLoading = true;
    this.hasError = false;

    // success
    this.changePasswordSubmitted = true;
    this.hasError = false;
    this.changePasswordInfo.password = '';
    this.confirmPassword = '';
    this.hidePassword = true;
    this.hidePasswordConfirm = true;

    // error
    // this.hasError = true;

    // finally
    this.isLoading = false;
  }
}
