import {Component, Input} from '@angular/core';
import {amenitiesInfoMap, ratingType} from "../../../data/hotels-data/HotelsData";
import {Hotel} from "../../../models/hotels/HotelsInfo";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  ratingType = ratingType;
  amenitiesInfoMap = amenitiesInfoMap;
  @Input() hotel!: Hotel;
}
