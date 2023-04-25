import {Component, inject, OnInit, TemplateRef} from '@angular/core';
import {HotelService} from "../../services/hotel.service";
import {Observable, switchMap} from "rxjs";
import {Hotel} from "../../models/hotels/HotelsInfo";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ratingType, amenitiesInfoMap, citiesMap} from "../../data/hotels-data/HotelsData";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {
  route = inject(ActivatedRoute);
  router = inject(Router);
  hotelService = inject(HotelService);
  authService = inject(AuthService);
  modalService = inject(NgbModal);
  hotel: Observable<Hotel | undefined> | undefined;
  ratingType = ratingType;
  amenitiesInfoMap = amenitiesInfoMap;
  citiesMap = citiesMap;

  ngOnInit(): void {
    this.hotel = this.route.paramMap.pipe(
      switchMap(paramMap => this.hotelService.getHotelById(+paramMap.get('hotelId')!))
    );
  }

  noSuchHotel() {
    this.router.navigate(['not-found']);
  }

  openImageAsModal(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }
}
