import {inject, Injectable} from '@angular/core';
import {BookingInfo} from "../models/hotels/HotelsInfo";
import {AuthService} from "./auth.service";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  bookingsBSubject = new BehaviorSubject<Map<string, BookingInfo[]>>(new Map());
  authService = inject(AuthService);
  bookRoom(bookingInfo: BookingInfo) {
    const map: Map<string, BookingInfo[]> = this.bookingsBSubject.getValue();
    const email = this.authService.getCurrentUserEmail()!;
    if (!map.has(email)) {
      map.set(email, []);
    }
    map.set(email, [...map.get(email)!, bookingInfo]);
    this.bookingsBSubject.next(map);
  }
}
