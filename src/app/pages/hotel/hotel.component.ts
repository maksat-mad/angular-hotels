import {Component, inject, OnInit, TemplateRef} from '@angular/core';
import {HotelService} from "../../services/hotel.service";
import {Observable, switchMap} from "rxjs";
import {Hotel} from "../../models/hotels/HotelsInfo";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {amenitiesInfoMap, citiesMap, hotels, ratingType} from "../../data/hotels-data/HotelsData";
import {AuthService} from "../../services/auth.service";
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

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
  fb = inject(FormBuilder);
  hotel: Observable<Hotel | undefined> | undefined;
  ratingType = ratingType;
  amenitiesInfoMap = amenitiesInfoMap;
  citiesMap = citiesMap;
  panelOpenState = false;
  bookingForm!: FormGroup;

  ngOnInit(): void {
    this.hotel = this.route.paramMap.pipe(
      switchMap(paramMap => this.hotelService.getHotelById(+paramMap.get('hotelId')!))
    );

    this.bookingForm = this.fb.group({
      hotelId: new FormControl(
        {value: 1, disabled: true},
        {validators: [Validators.required]}
      ),
      email: ['', {validators: [Validators.required, Validators.email]}],
      phone: ['', {validators: [Validators.required]}],
      checkInDate: ['', {validators: [Validators.required]}],
      checkOutDate: ['', {validators: [Validators.required]}],
      address: this.fb.group({
        city: ['', {validators: [Validators.required]}],
        street: ['', {validators: [Validators.required]}],
        streetNumber: ['', {validators: [Validators.required]}],
      }),
    }, {updateOn: 'blur'});
  }

  noSuchHotel() {
    this.router.navigate(['not-found']);
  }

  openImageAsModal(content: TemplateRef<any>) {
    this.modalService.open(content, {centered: true});
  }

  book() {
    console.log(this.bookingForm.getRawValue());
  }
}
