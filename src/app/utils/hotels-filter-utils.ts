import {Amenity, Filter, Hotel} from "../models/hotels/HotelsInfo";
import {Observable, of} from "rxjs";
import {hotels} from "../data/HotelsData";

export function fillAmenities(filter: Filter) {
  const amenities: Amenity[] = [];
  if (filter.propertyName !== '') {
    amenities.push({key: 'propertyName', value: filter.propertyName} as Amenity);
  }
  if (filter.apartment) {
    amenities.push({key: 'apartment', value: 'Apartment'} as Amenity);
  }
  if (filter.hotel) {
    amenities.push({key: 'hotel', value: 'Hotel'} as Amenity);
  }
  if (filter.hostel) {
    amenities.push({key: 'hostel', value: 'Hostel'} as Amenity);
  }
  if (filter.price !== 500) {
    amenities.push({key: 'price', value: '$' + filter.price} as Amenity);
  }
  if (filter.star1) {
    amenities.push({key: 'star1', value: '1 star'} as Amenity);
  }
  if (filter.star2) {
    amenities.push({key: 'star2', value: '2 star'} as Amenity);
  }
  if (filter.star3) {
    amenities.push({key: 'star3', value: '3 star'} as Amenity);
  }
  if (filter.star4) {
    amenities.push({key: 'star4', value: '4 star'} as Amenity);
  }
  if (filter.star5) {
    amenities.push({key: 'star5', value: '5 star'} as Amenity);
  }
  if (filter.rating !== '0') {
    switch (filter.rating) {
      case '1':
        amenities.push({key: 'rating', value: 'Any'} as Amenity);
        break;
      case '2':
        amenities.push({key: 'rating', value: 'Wonderful'} as Amenity);
        break;
      case '3':
        amenities.push({key: 'rating', value: 'Very good'} as Amenity);
        break;
      case '4':
        amenities.push({key: 'rating', value: 'Good'} as Amenity);
    }
  }
  if (filter.breakfast) {
    amenities.push({key: 'breakfast', value: 'Breakfast included'} as Amenity);
  }
  if (filter.lunch) {
    amenities.push({key: 'lunch', value: 'Lunch included'} as Amenity);
  }
  if (filter.dinner) {
    amenities.push({key: 'dinner', value: 'Dinner included'} as Amenity);
  }
  if (filter.all_inclusive) {
    amenities.push({key: 'all_inclusive', value: 'All-inclusive'} as Amenity);
  }
  if (filter.place !== '0') {
    switch (filter.place) {
      case '1':
        amenities.push({key: 'place', value: 'Any'} as Amenity);
        break;
      case '2':
        amenities.push({key: 'place', value: 'City center'} as Amenity);
        break;
      case '3':
        amenities.push({key: 'place', value: 'Not city center'} as Amenity);
    }
  }
  if (filter.parking) {
    amenities.push({key: 'parking', value: 'Parking'} as Amenity);
  }
  if (filter.pool) {
    amenities.push({key: 'pool', value: 'Pool'} as Amenity);
  }
  if (filter.spa) {
    amenities.push({key: 'spa', value: 'Spa'} as Amenity);
  }
  if (filter.pet_friendly) {
    amenities.push({key: 'pet_friendly', value: 'Pet-friendly'} as Amenity);
  }
  if (filter.wifi) {
    amenities.push({key: 'wifi', value: 'WiFi included'} as Amenity);
  }
  if (filter.air_conditioned) {
    amenities.push({key: 'air_conditioned', value: 'Air conditioned'} as Amenity);
  }
  if (filter.restaurant) {
    amenities.push({key: 'restaurant', value: 'Restaurant'} as Amenity);
  }
  if (filter.sea_view) {
    amenities.push({key: 'sea_view', value: 'Sea view'} as Amenity);
  }
  if (filter.gym) {
    amenities.push({key: 'gym', value: 'Gym'} as Amenity);
  }
  return amenities;
}

export function applyFilter(filter: Filter):Observable<Hotel[]> {
  return of(hotels.filter(hotel => {
    // property name
    if (filter.propertyName !== '' &&
      !hotel.name.toLowerCase().split(' ').some(name => name.startsWith(filter.propertyName.toLowerCase()))
    ) {
      return false;
    }

    // price
    if (hotel.price > filter.price) {
      return false;
    }

    // property class
    const propertyClass = [];
    if (filter.star1) {
      propertyClass.push('1');
    }
    if (filter.star2) {
      propertyClass.push('2');
    }
    if (filter.star3) {
      propertyClass.push('3');
    }
    if (filter.star4) {
      propertyClass.push('4');
    }
    if (filter.star5) {
      propertyClass.push('5');
    }
    if (propertyClass.length !== 0) {
      let count = 0;
      for (let star of propertyClass) {
        if (hotel.propertyClass === star) {
          count++;
        }
      }
      if (count === 0) {
        return false;
      }
    }

    // rating
    if (filter.rating !== '0' && filter.rating !== '1') {
      if (+hotel.rating < 7 && (filter.rating === '4' || filter.rating === '3' || filter.rating === '2')) {
        return false;
      }
      if (+hotel.rating < 8 && (filter.rating === '3' || filter.rating === '2')) {
        return false;
      }
      if (+hotel.rating < 9 && filter.rating === '2') {
        return false;
      }
    }

    // place
    if (filter.place !== '0' && filter.place !== '1' && filter.place !== hotel.locationType) {
      return false;
    }

    // amenities
    const filterAmenities = [];
    if (filter.parking) {
      filterAmenities.push('1');
    }
    if (filter.pool) {
      filterAmenities.push('2');
    }
    if (filter.spa) {
      filterAmenities.push('3');
    }
    if (filter.pet_friendly) {
      filterAmenities.push('4');
    }
    if (filter.wifi) {
      filterAmenities.push('5');
    }
    if (filter.air_conditioned) {
      filterAmenities.push('6');
    }
    if (filter.restaurant) {
      filterAmenities.push('7');
    }
    if (filter.sea_view) {
      filterAmenities.push('8');
    }
    if (filter.gym) {
      filterAmenities.push('9');
    }

    if (filterAmenities.length === 0) {
      return true;
    } else {
      let count = 0;
      for (let amenity of filterAmenities) {
        if (hotel.amenities.includes(amenity)) {
          count++;
        }
      }
      if (count === filterAmenities.length) {
        return true;
      }
    }

    return false;
  }));
}
