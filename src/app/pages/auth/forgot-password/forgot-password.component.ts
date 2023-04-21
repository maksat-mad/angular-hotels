import {Component, inject, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {CurrentPageService} from "../../../services/current-page.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html'
})
export class ForgotPasswordComponent implements OnInit {
  currentPageService = inject(CurrentPageService);
  email = '';
  ngOnInit(): void {
    this.currentPageService.currentPage = 4;
  }
  resetPassword(form: NgForm) {
    console.log(form.value);
  }
}
