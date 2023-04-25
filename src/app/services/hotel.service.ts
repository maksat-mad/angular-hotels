import {Injectable} from '@angular/core';
import {map, Observable, of} from "rxjs";
import {hotels} from "../data/hotels-data/HotelsData";
import {Filter, Hotel} from "../models/hotels/HotelsInfo";
import {applySortingType} from "../utils/hotels-sorting-utils";
import {applyFilter} from "../utils/hotels-filter-utils";

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  getAllHotels(): Observable<Hotel[]> {
    return of(hotels);
  }

  getHotelById(id: number): Observable<Hotel | undefined> {
    return of(hotels).pipe(
      map((hotels: Hotel[]) => {
        return hotels.find((hotel: Hotel) => hotel.id === id)
      })
    );
  }

  getHotelsBySortingType(sortingType: number, hotels: Observable<Hotel[]>): Observable<Hotel[]> {
    return applySortingType(sortingType, hotels);
  }

  getHotelsByCity(city: number, filter: Filter): Observable<Hotel[]> {
    return applyFilter(filter).pipe(
      map((hotels: Hotel[]) => {
        return hotels.filter(h => h.city === city);
      })
    );
  }

  getHotelsByFilter(filter: Filter): Observable<Hotel[]> {
    return applyFilter(filter);
  }
}
