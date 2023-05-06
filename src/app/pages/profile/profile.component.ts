import {Component, inject, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {BookingService} from "../../services/booking.service";
import {BookingInfo} from "../../models/hotels/HotelsInfo";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  authService = inject(AuthService);
  bookingService = inject(BookingService);
  changePasswordSubmitted = false;
  isLoading = false;
  hasError = false;
  hidePassword = true;
  hidePasswordConfirm = true;
  panelOpenState = false;
  confirmPassword = '';
  password = '';
  bookings: BookingInfo[] = [];

  ngOnInit(): void {
    const bookingsBSubject = this.bookingService.bookingsBSubject.subscribe((map) => {
      this.bookings = map.get(this.authService.getCurrentUserEmail()!)!;
    });
    bookingsBSubject.unsubscribe();
  }

  changePasswordSubmittedState() {
    this.changePasswordSubmitted = false;
    this.isLoading = false;
    this.hasError = false;
  }

  passwordChangeHandle(password: string) {
    this.password = password;
    this.confirmPassword = '';
  }

  changePassword() {
    this.isLoading = true;
    this.hasError = false;

    this.authService.updatePassword(this.password)
      .then(() => {
        this.changePasswordSubmitted = true;
        this.hasError = false;
        this.password = '';
        this.confirmPassword = '';
        this.hidePassword = true;
        this.hidePasswordConfirm = true;
      })
      .catch(() => {
        this.hasError = true;
      })
      .finally(() => {
        this.isLoading = false;
      })
  }
}
