import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {hotels} from "../data/hotels-data/HotelsData";
import {Hotel} from "../models/hotels/HotelsInfo";

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  getAllHotels(): Observable<Hotel[]> {
    return of(hotels);
  }
}
