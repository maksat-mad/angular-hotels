import {inject, Injectable} from '@angular/core';
import {map, Observable, of} from "rxjs";
import {hotels} from "../data/HotelsData";
import {Filter, Hotel, Comment} from "../models/hotels/HotelsInfo";
import {applySortingType} from "../utils/hotels-sorting-utils";
import {applyFilter} from "../utils/hotels-filter-utils";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  http = inject(HttpClient);

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

  getRelatedHotels(city: number, id: number): Observable<Hotel[]> {
    return of(
      hotels.filter(hotel => hotel.city === city && id !== hotel.id)
        .slice(0, 3)
    );
  }

  getHotelsByFilter(filter: Filter): Observable<Hotel[]> {
    return applyFilter(filter);
  }

  getComments(): Observable<Comment[]> {
    return this.http.get<Comment[]>('https://jsonplaceholder.typicode.com/comments');
  }
}
