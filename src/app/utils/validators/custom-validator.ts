import {AbstractControl, FormGroup} from '@angular/forms';

export class CustomValidator {
  static ValidateEmail(control: AbstractControl) {
    const email = control.value as string;
    if (email.length === 0) {
      return {
        msg: 'You must enter a value'
      };
    }

    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regex.test(email)) {
      return {
        msg: 'Invalid email'
      };
    }
    return null;
  }

  static ValidatorPhone(control: AbstractControl) {
    const phone = control.value as string;
    if (phone.length === 0) {
      return {
        msg: 'Phone number is required'
      };
    }
    const regex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
    if (!regex.test(phone)) {
      return {
        msg: 'Invalid phone number'
      };
    }
    return null;
  }

  static ValidatorBookingDate(control: FormGroup) {
    const checkinDate: any = new Date(control.get('checkinDate')?.value);
    const checkoutDate: any = new Date(control.get('checkoutDate')?.value);

    const diffTime = checkoutDate - checkinDate;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    console.log(diffDays);

    if (diffDays <= 0) {
      return {
        msg: 'Check-out date must be later than check-in date'
      };
    }
    return null;
  }
}
