import {Component, inject, OnDestroy} from '@angular/core';
import {cities, defaultFilter} from "../../data/hotels-data/HotelsData";
import {FilterService} from "../../services/filter.service";
import {Amenity, Filter} from "../../models/hotels/HotelsInfo";
import {fillAmenities} from "../../utils/hotels-utils";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnDestroy {
  cities = cities;
  todayDate: Date = new Date();
  amenities: Amenity[] = [];
  filter: Filter = defaultFilter;
  filterInfoBSubject = inject(FilterService).filterInfoBSubject.subscribe((filter) => {
    this.filter = filter;
    this.amenities = fillAmenities(filter);
  });

  ngOnDestroy(): void {
    this.filterInfoBSubject.unsubscribe();
  }
}
