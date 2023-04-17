import {Component, inject, OnDestroy} from '@angular/core';
import {cities, defaultFilter} from "../../data/hotels-data/HotelsData";
import {FilterService} from "../../services/filter.service";
import {Amenity, Filter} from "../../models/hotels/HotelsInfo";

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
  filterService = inject(FilterService);
  filterInfoBSubject = this.filterService.filterInfoBSubject.subscribe((filter) => {
    this.filter = filter;
    this.fillAmenities(filter);
  });

  fillAmenities(filter: Filter) {
    this.amenities = [];
    if (filter.propertyName !== '') {
      this.amenities.push({key: 'propertyName', value: filter.propertyName} as Amenity);
    }
    if (filter.apartment) {
      this.amenities.push({key: 'apartment', value: 'Apartment'} as Amenity);
    }
    if (filter.hotel) {
      this.amenities.push({key: 'hotel', value: 'Hotel'} as Amenity);
    }
    if (filter.hostel) {
      this.amenities.push({key: 'hostel', value: 'Hostel'} as Amenity);
    }
    if (filter.price !== 500) {
      this.amenities.push({key: 'price', value: filter.price + '$'} as Amenity);
    }
    if (filter.star1) {
      this.amenities.push({key: 'star1', value: '1 &bigstar;'} as Amenity);
    }
    if (filter.star2) {
      this.amenities.push({key: 'star2', value: '2 &bigstar;'} as Amenity);
    }
    if (filter.star3) {
      this.amenities.push({key: 'star3', value: '3 &bigstar;'} as Amenity);
    }
    if (filter.star4) {
      this.amenities.push({key: 'star4', value: '4 &bigstar;'} as Amenity);
    }
    if (filter.star5) {
      this.amenities.push({key: 'star5', value: '5 &bigstar;'} as Amenity);
    }
    if (filter.rating !== 0) {
      switch (filter.rating) {
        case 1:
          this.amenities.push({key: 'rating', value: 'Any'} as Amenity);
          break;
        case 2:
          this.amenities.push({key: 'rating', value: 'Wonderful'} as Amenity);
          break;
        case 3:
          this.amenities.push({key: 'rating', value: 'Very good'} as Amenity);
          break;
        case 4:
          this.amenities.push({key: 'rating', value: 'Good'} as Amenity);
      }
    }
    if (filter.breakfast) {
      this.amenities.push({key: 'breakfast', value: 'Breakfast included'} as Amenity);
    }
    if (filter.lunch) {
      this.amenities.push({key: 'lunch', value: 'Lunch included'} as Amenity);
    }
    if (filter.dinner) {
      this.amenities.push({key: 'dinner', value: 'Dinner included'} as Amenity);
    }
    if (filter.all_inclusive) {
      this.amenities.push({key: 'all_inclusive', value: 'All-inclusive'} as Amenity);
    }
    if (filter.place !== 0) {
      switch (filter.place) {
        case 1:
          this.amenities.push({key: 'place', value: 'Any'} as Amenity);
          break;
        case 2:
          this.amenities.push({key: 'place', value: 'City center'} as Amenity);
          break;
        case 3:
          this.amenities.push({key: 'place', value: 'Not city center'} as Amenity);
      }
    }
    if (filter.parking) {
      this.amenities.push({key: 'parking', value: 'Parking'} as Amenity);
    }
    if (filter.pool) {
      this.amenities.push({key: 'pool', value: 'Pool'} as Amenity);
    }
    if (filter.spa) {
      this.amenities.push({key: 'spa', value: 'Spa'} as Amenity);
    }
    if (filter.pet_friendly) {
      this.amenities.push({key: 'pet_friendly', value: 'Pet-friendly'} as Amenity);
    }
    if (filter.wifi) {
      this.amenities.push({key: 'wifi', value: 'WiFi included'} as Amenity);
    }
    if (filter.air_conditioned) {
      this.amenities.push({key: 'air_conditioned', value: 'Air conditioned'} as Amenity);
    }
    if (filter.restaurant) {
      this.amenities.push({key: 'restaurant', value: 'Restaurant'} as Amenity);
    }
    if (filter.sea_view) {
      this.amenities.push({key: 'sea_view', value: 'Sea view'} as Amenity);
    }
    if (filter.gym) {
      this.amenities.push({key: 'gym', value: 'Gym'} as Amenity);
    }
  }

  removeAmenity(amenity: Amenity) {
    this.filterService.setFilter({...this.filter})
  }

  ngOnDestroy(): void {
    this.filterInfoBSubject.unsubscribe();
  }
}
