import {Component, Input} from '@angular/core';
import {BookingInfo} from "../../../../models/hotels/HotelsInfo";

@Component({
  selector: 'app-history-card',
  templateUrl: './history-card.component.html',
  styleUrls: ['../card.component.scss']
})
export class HistoryCardComponent {
  @Input() booking!: BookingInfo;
}
