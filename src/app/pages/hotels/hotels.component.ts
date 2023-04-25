import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {cities, defaultFilter, sortingTypes} from "../../data/hotels-data/HotelsData";
import {FilterService} from "../../services/filter.service";
import {Amenity, Filter, Hotel} from "../../models/hotels/HotelsInfo";
import {fillAmenities} from "../../utils/hotels-filter-utils";
import {HotelService} from "../../services/hotel.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.scss']
})
export class HotelsComponent implements OnInit, OnDestroy {
  cities = cities;
  sortingTypes = sortingTypes;
  todayDate: Date = new Date();
  amenities: Amenity[] = [];
  filter: Filter = defaultFilter;
  filterService = inject(FilterService);
  hotelService = inject(HotelService);
  filterInfoBSubject = this.filterService.filterInfoBSubject.subscribe((filter) => {
    this.filter = filter;
    this.amenities = fillAmenities(filter);
    this.hotels = this.hotelService.getHotelsByFilter(filter);
  });
  hotels!: Observable<Hotel[]>;

  ngOnInit() {
    this.hotels = this.hotelService.getAllHotels();
  }

  ngOnDestroy(): void {
    this.filterInfoBSubject.unsubscribe();
  }

  removeAllFilters() {
    this.filterService.setFilter(defaultFilter);
  }

  changeSortingType(sortingType: number) {
    this.hotels = this.hotelService.getHotelsBySortingType(sortingType, this.hotels);
  }

  changeCity(city: number) {
    this.hotels = this.hotelService.getHotelsByCity(city, this.filter);
  }
}
