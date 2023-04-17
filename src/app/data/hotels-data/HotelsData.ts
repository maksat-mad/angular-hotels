import {City, Filter} from "../../models/hotels/HotelsInfo";

export const cities: City[] = [
  {value: 1, viewValue: 'Sydney'},
  {value: 2, viewValue: 'Melbourne'},
  {value: 3, viewValue: 'Brisbane'},
  {value: 4, viewValue: 'Perth'},
  {value: 5, viewValue: 'Adelaide'},
  {value: 6, viewValue: 'Canberra'},
  {value: 7, viewValue: 'Hobart'},
  {value: 8, viewValue: 'Darwin'}
];

export const defaultFilter: Filter = {
  "propertyName": "",
  "apartment": false,
  "hotel": false,
  "hostel": false,
  "price": 50,
  "star1": false,
  "star2": false,
  "star3": false,
  "star4": false,
  "star5": false,
  "rating": 0,
  "breakfast": false,
  "lunch": false,
  "dinner": false,
  "all_inclusive": false,
  "place": 0,
  "parking": false,
  "pool": false,
  "spa": false,
  "pet_friendly": false,
  "wifi": false,
  "air_conditioned": false,
  "restaurant": false,
  "sea_view": false,
  "gym": false
};
