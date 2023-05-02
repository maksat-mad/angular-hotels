import { Injectable } from '@angular/core';
import {BookingInfo} from "../models/hotels/HotelsInfo";

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  bookRoom(bookingInfo: BookingInfo) {
    console.log(bookingInfo);
    console.log(typeof bookingInfo);
  }
}
