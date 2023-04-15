import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  router = inject(Router);
  firstClick = true;

  clickedOutside() {
    if (this.firstClick) {
      this.firstClick = false;
      return;
    }
    this.router.navigate(['/hotels/', { outlets: {modal: null} }]);
  }
}
