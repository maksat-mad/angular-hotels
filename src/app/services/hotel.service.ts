import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {hotels} from "../data/hotels-data/HotelsData";
import {Hotel} from "../models/hotels/HotelsInfo";
import {applySortingType} from "../utils/hotels-sorting-utils";

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  getAllHotels(): Observable<Hotel[]> {
    return of(hotels);
  }

  getHotelsBySortingType(sortingType: number, hotels: Observable<Hotel[]>): Observable<Hotel[]> {
    return applySortingType(sortingType, hotels);
  }
}
