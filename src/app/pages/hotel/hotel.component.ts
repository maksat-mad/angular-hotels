import {Component, inject, OnInit, TemplateRef} from '@angular/core';
import {HotelService} from "../../services/hotel.service";
import {Observable, switchMap} from "rxjs";
import {Hotel} from "../../models/hotels/HotelsInfo";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {amenitiesInfoMap, citiesMap, hotels, ratingType} from "../../data/hotels-data/HotelsData";
import {AuthService} from "../../services/auth.service";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidator} from "../../utils/validators/custom-validator";

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
  todayDate: Date = new Date();

  ngOnInit(): void {
    this.hotel = this.route.paramMap.pipe(
      switchMap(paramMap => this.hotelService.getHotelById(+paramMap.get('hotelId')!))
    );

    this.bookingForm = this.fb.group({
      hotelName: new FormControl(
        {value: 'Hotel Name', disabled: true},
        {validators: [Validators.required]}
      ),
      email: ['', {validators: [CustomValidator.ValidateEmail]}],
      phone: ['', {validators: [CustomValidator.ValidatorPhone]}],
      bookingDate: this.fb.group({
        checkinDate: ['', {validators: [Validators.required]}],
        checkoutDate: ['', {validators: [Validators.required]}]
      }, {validators: [CustomValidator.ValidatorBookingDate]}),
      address: this.fb.group({
        city: [''],
        street: [''],
        streetNumber: [''],
      }),
      guests: this.fb.array([this.addGuestControl()], {validators: [Validators.required]})
    }, {updateOn: 'blur'});
  }

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }

  noSuchHotel() {
    this.router.navigate(['not-found']);
  }

  openImageAsModal(content: TemplateRef<any>) {
    this.modalService.open(content, {centered: true});
  }

  addGuestControl() {
    return this.fb.group({
      guestName: ['', { validators: [Validators.required] }],
      age: new FormControl(''),
    });
  }

  addGuest() {
    this.guests.push(this.addGuestControl());
  }

  removeGuest(i:number) {
    this.guests.removeAt(i);
  }

  book() {
    console.log(this.bookingForm.getRawValue());
    this.clear();
  }

  clear() {
    this.bookingForm.reset({
      hotelName: 'Hotel Name',
      email: '',
      phone: '',
      bookingDate: {
        checkinDate: '',
        checkoutDate: ''
      },
      address: {
        city: '',
        street: '',
        streetNumber: '',
      },
      guests: []
    });
    this.guests.clear();
    this.addGuest();
  }
}