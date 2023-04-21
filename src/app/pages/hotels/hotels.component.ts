import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {cities, defaultFilter} from "../../data/hotels-data/HotelsData";
import {FilterService} from "../../services/filter.service";
import {Amenity, Filter} from "../../models/hotels/HotelsInfo";
import {fillAmenities} from "../../utils/hotels-utils";
import {CurrentPageService} from "../../services/current-page.service";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit, OnDestroy {
  cities = cities;
  todayDate: Date = new Date();
  amenities: Amenity[] = [];
  filter: Filter = defaultFilter;
  filterService = inject(FilterService);
  currentPageService = inject(CurrentPageService);
  filterInfoBSubject = this.filterService.filterInfoBSubject.subscribe((filter) => {
    this.filter = filter;
    this.amenities = fillAmenities(filter);
  });

  ngOnInit(): void {
    this.currentPageService.currentPage = 1;
  }

  removeAllFilters() {
    this.filterService.setFilter(defaultFilter);
  }

  ngOnDestroy(): void {
    this.filterInfoBSubject.unsubscribe();
  }
}
