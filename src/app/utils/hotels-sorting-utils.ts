import {map, Observable} from "rxjs";
import {Hotel} from "../models/hotels/HotelsInfo";

export function applySortingType(sortingType: number, hotels: Observable<Hotel[]>): Observable<Hotel[]> {
  switch (sortingType) {
    case 1:
      return hotels.pipe(
        map((hotels: Hotel[]) => {
          return hotels.sort((h1: Hotel, h2: Hotel) => {
            return h1.id - h2.id;
          });
        })
      );
    case 2:
      return hotels.pipe(
        map((hotels: Hotel[]) => {
          return hotels.sort((h1: Hotel, h2: Hotel) => {
            return h1.price - h2.price;
          });
        })
      );
    case 3:
      return hotels.pipe(
        map((hotels: Hotel[]) => {
          return hotels.sort((h1: Hotel, h2: Hotel) => {
            return h2.price - h1.price;
          });
        })
      );
    case 4:
      return hotels.pipe(
        map((hotels: Hotel[]) => {
          return hotels.sort((h1: Hotel, h2: Hotel) => {
            return +h2.rating - +h1.rating;
          });
        })
      );
    default:
      return hotels;
  }
}
