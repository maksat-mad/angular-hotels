import {Component, inject} from '@angular/core';
import {cities} from "../../data/hotels-data/HotelsData";
import {FilterService} from "../../services/filter.service";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent {
  filterService = inject(FilterService);
  cities = cities;
  todayDate: Date = new Date();
}
