import {Component, inject, OnInit} from '@angular/core';
import {CurrentPageService} from "../../services/current-page.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentPageService = inject(CurrentPageService);
  currentRate = 8;
  ngOnInit(): void {
    this.currentPageService.currentPage = 0;
  }
}
