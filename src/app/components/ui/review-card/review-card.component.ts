import {Component} from '@angular/core';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['../card/card.component.scss']
})
export class ReviewCardComponent {
  rating = Math.ceil(Math.random() * 10);
}
