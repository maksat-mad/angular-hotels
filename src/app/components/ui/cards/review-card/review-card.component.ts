import {Component, Input} from '@angular/core';
import {Comment} from '../../../../models/hotels/HotelsInfo';

@Component({
  selector: 'app-review-card',
  templateUrl: './review-card.component.html',
  styleUrls: ['../card.component.scss']
})
export class ReviewCardComponent {
  @Input() comment!: Comment;
  rating = Math.ceil(Math.random() * 10);
}
