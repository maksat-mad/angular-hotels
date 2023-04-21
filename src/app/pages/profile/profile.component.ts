import {Component, inject, OnInit} from '@angular/core';
import {CurrentPageService} from "../../services/current-page.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentPageService = inject(CurrentPageService);
  ngOnInit(): void {
    this.currentPageService.currentPage = 3;
  }
}
