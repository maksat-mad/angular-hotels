import {AmenityInfo, Filter, Hotel, Selector} from "../../models/hotels/HotelsInfo";

export const cities: Selector[] = [
  {value: 1, viewValue: 'Sydney'},
  {value: 2, viewValue: 'Perth'},
  {value: 3, viewValue: 'Melbourne'},
  {value: 4, viewValue: 'Brisbane'},
  {value: 5, viewValue: 'Adelaide'},
  {value: 6, viewValue: 'Canberra'},
  {value: 7, viewValue: 'Hobart'},
  {value: 8, viewValue: 'Darwin'}
];

export const sortingTypes: Selector[] = [
  {value: 1, viewValue: 'Recommended'},
  {value: 2, viewValue: 'Price: low to high'},
  {value: 3, viewValue: 'Price: high to low'},
  {value: 4, viewValue: 'Guest rating'}
];

export const ratingType = new Map([
  ['0', ''],
  ['1', ''],
  ['2', 'Wonderful'],
  ['3', 'Very good'],
  ['4', 'Good']
]);

export const amenitiesInfoMap: Map<String, AmenityInfo> = new Map([
  [
    '1',
    {
      name: 'Parking',
      src: 'parked-car.png',
      alt: 'parking'
    } as AmenityInfo
  ],
  [
    '2',
    {
      name: 'Pool',
      src: 'swimming.png',
      alt: 'swimming'
    } as AmenityInfo
  ],
  [
    '3',
    {
      name: 'Spa',
      src: 'plant.png',
      alt: 'spa'
    } as AmenityInfo
  ],
  [
    '4',
    {
      name: 'Pet-friendly',
      src: 'pet-friendly.png',
      alt: 'pet-fri'
    } as AmenityInfo
  ],
  [
    '5',
    {
      name: 'WiFi included',
      src: 'wi-fi.png',
      alt: 'wifi'
    } as AmenityInfo
  ],
  [
    '6',
    {
      name: 'Air conditioned',
      src: 'air-conditioner.png',
      alt: 'air-con'
    } as AmenityInfo
  ],
  [
    '7',
    {
      name: 'Restaurant',
      src: 'meal.png',
      alt: 'meal'
    } as AmenityInfo
  ],
  [
    '8',
    {
      name: 'Sea view',
      src: 'beach.png',
      alt: 'sea-view'
    } as AmenityInfo
  ],
  [
    '9',
    {
      name: 'Gym',
      src: 'dumbbell.png',
      alt: 'gym'
    } as AmenityInfo
  ]
]);

export const defaultFilter: Filter = {
  propertyName: "",
  apartment: false,
  hotel: false,
  hostel: false,
  price: 500,
  star1: false,
  star2: false,
  star3: false,
  star4: false,
  star5: false,
  rating: '0',
  breakfast: false,
  lunch: false,
  dinner: false,
  all_inclusive: false,
  place: '0',
  parking: false,
  pool: false,
  spa: false,
  pet_friendly: false,
  wifi: false,
  air_conditioned: false,
  restaurant: false,
  sea_view: false,
  gym: false
};

export const hotels: Hotel[] = [
  {
    id: 1,
    name: 'Great Hotel Perth',
    img: 'perth1.jpg',
    propertyClass: '3',
    locationType: '2',
    amenities: ['1', '2', '3', '4'],
    rating: '7',
    numberOfReviews: 10,
    price: 50
  },
  {
    id: 2,
    name: 'Crown Towers Perth',
    img: 'perth2.jpg',
    propertyClass: '4',
    locationType: '3',
    amenities: ['2', '3', '4', '5'],
    rating: '8',
    numberOfReviews: 30,
    price: 350
  },
  {
    id: 3,
    name: 'ibis Styles Perth',
    img: 'perth3.jpg',
    propertyClass: '3',
    locationType: '2',
    amenities: ['3', '4', '5', '6'],
    rating: '9',
    numberOfReviews: 20,
    price: 220
  },
  {
    id: 4,
    name: 'Crown Promenade Perth',
    img: 'perth4.jpg',
    propertyClass: '5',
    locationType: '3',
    amenities: ['4', '5', '6', '7'],
    rating: '10',
    numberOfReviews: 30,
    price: 220
  },
  {
    id: 5,
    name: 'Pan Pacific Perth',
    img: 'perth5.jpg',
    propertyClass: '5',
    locationType: '2',
    amenities: ['6', '7', '8', '9'],
    rating: '8',
    numberOfReviews: 45,
    price: 420
  },
  {
    id: 6,
    name: 'Crown Metro Perth',
    img: 'perth6.jpg',
    propertyClass: '1',
    locationType: '3',
    amenities: ['7', '8', '9', '1'],
    rating: '9',
    numberOfReviews: 80,
    price: 120
  },
  {
    id: 7,
    name: 'Captain Stirling Perth',
    img: 'perth7.jpg',
    propertyClass: '2',
    locationType: '2',
    amenities: ['8', '9', '1', '2'],
    rating: '10',
    numberOfReviews: 35,
    price: 250
  },
  {
    id: 8,
    name: 'Quest Ascot Perth',
    img: 'perth8.jpg',
    propertyClass: '3',
    locationType: '3',
    amenities: ['9', '1', '2', '3'],
    rating: '9',
    numberOfReviews: 65,
    price: 250
  },
  {
    id: 9,
    name: 'Bentley Motel Perth',
    img: 'perth9.jpg',
    propertyClass: '4',
    locationType: '2',
    amenities: ['1', '2', '3', '4'],
    rating: '8',
    numberOfReviews: 85,
    price: 350
  },
  {
    id: 10,
    name: 'Country Comfort Perth',
    img: 'perth99.jpg',
    propertyClass: '5',
    locationType: '3',
    amenities: ['2', '3', '4', '5'],
    rating: '9',
    numberOfReviews: 95,
    price: 400
  },

  {
    id: 11,
    name: 'Sydney Central',
    img: 'sydney1.jpg',
    propertyClass: '1',
    locationType: '2',
    amenities: ['1', '2', '3', '4'],
    rating: '7',
    numberOfReviews: 10,
    price: 20
  },
  {
    id: 12,
    name: 'Sydney Harbour',
    img: 'sydney2.jpg',
    propertyClass: '4',
    locationType: '3',
    amenities: ['2', '3', '4', '5'],
    rating: '8',
    numberOfReviews: 30,
    price: 450
  },
  {
    id: 13,
    name: 'Aero-tel Sydney',
    img: 'sydney3.jpg',
    propertyClass: '3',
    locationType: '2',
    amenities: ['3', '4', '5', '6'],
    rating: '9',
    numberOfReviews: 20,
    price: 320
  },
  {
    id: 14,
    name: 'Ridges Sydney Central',
    img: 'sydney4.jpg',
    propertyClass: '5',
    locationType: '3',
    amenities: ['4', '5', '6', '7'],
    rating: '10',
    numberOfReviews: 30,
    price: 220
  },
  {
    id: 15,
    name: 'Hotel Challis Sydney',
    img: 'sydney5.jpg',
    propertyClass: '5',
    locationType: '2',
    amenities: ['6', '7', '8', '9'],
    rating: '8',
    numberOfReviews: 45,
    price: 320
  },
  {
    id: 16,
    name: 'Great Hotel Sydney',
    img: 'sydney6.jpg',
    propertyClass: '1',
    locationType: '3',
    amenities: ['7', '8', '9', '1'],
    rating: '9',
    numberOfReviews: 80,
    price: 120
  },
  {
    id: 17,
    name: 'Wake Up! Sydney',
    img: 'sydney7.jpg',
    propertyClass: '2',
    locationType: '2',
    amenities: ['8', '9', '1', '2'],
    rating: '10',
    numberOfReviews: 35,
    price: 180
  },
  {
    id: 18,
    name: 'Quest Ascot Perth',
    img: 'sydney8.jpg',
    propertyClass: '3',
    locationType: '3',
    amenities: ['9', '1', '2', '3'],
    rating: '9',
    numberOfReviews: 65,
    price: 250
  },
  {
    id: 19,
    name: 'ibis Styles Sydney',
    img: 'sydney9.jpg',
    propertyClass: '4',
    locationType: '2',
    amenities: ['1', '2', '3', '4'],
    rating: '8',
    numberOfReviews: 85,
    price: 350
  },
  {
    id: 20,
    name: 'Travel Hotel Sydney',
    img: 'sydney99.jpg',
    propertyClass: '5',
    locationType: '3',
    amenities: ['2', '3', '4', '5'],
    rating: '9',
    numberOfReviews: 95,
    price: 400
  }
];
