export interface City {
  value: number;
  viewValue: string;
}

export interface Filter {
  propertyName: string,
  apartment: boolean,
  hotel: boolean,
  hostel: boolean,
  price: number,
  star1: boolean,
  star2: boolean,
  star3: boolean,
  star4: boolean,
  star5: boolean,
  rating: string,
  breakfast: boolean,
  lunch: boolean,
  dinner: boolean,
  all_inclusive: boolean,
  place: string,
  parking: boolean,
  pool: boolean,
  spa: boolean,
  pet_friendly: boolean,
  wifi: boolean,
  air_conditioned: boolean,
  restaurant: boolean,
  sea_view: boolean,
  gym: boolean
}

export interface Amenity {
  key: string,
  value: string
}
