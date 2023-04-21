import {Component, inject, OnInit} from '@angular/core';
import {CurrentPageService} from "../../services/current-page.service";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
  standalone: true
})
export class AboutUsComponent implements OnInit {
  currentPageService = inject(CurrentPageService);
  ngOnInit(): void {
    this.currentPageService.currentPage = 2;
  }
}
