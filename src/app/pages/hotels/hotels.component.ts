import { Component } from '@angular/core';
import {cities} from "../../data/hotels-data/HotelsData";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent {
  cities = cities;
  todayDate: Date = new Date();
}
