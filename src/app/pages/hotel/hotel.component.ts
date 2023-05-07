import {Component, inject, OnDestroy, OnInit, TemplateRef} from '@angular/core';
import {HotelService} from "../../services/hotel.service";
import {Observable, Subscription, switchMap} from "rxjs";
import {Comment, Hotel} from "../../models/hotels/HotelsInfo";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {amenitiesInfoMap, citiesMap, ratingType} from "../../data/hotels-data/HotelsData";
import {AuthService} from "../../services/auth.service";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidator} from "../../utils/validators/custom-validator";
import {BookingService} from "../../services/booking.service";

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit, OnDestroy {
  route = inject(ActivatedRoute);
  router = inject(Router);
  hotelService = inject(HotelService);
  authService = inject(AuthService);
  modalService = inject(NgbModal);
  fb = inject(FormBuilder);
  bookingService = inject(BookingService);
  hotel: Observable<Hotel | undefined> | undefined;
  ratingType = ratingType;
  amenitiesInfoMap = amenitiesInfoMap;
  citiesMap = citiesMap;
  panelOpenState = false;
  bookingForm!: FormGroup;
  todayDate: Date = new Date();
  formSubmitted = false;
  comments!: Observable<Comment[]>;
  page = 1;
  pageSize = 3;
  reviewForm!: FormGroup;
  reviewSubmitted = false;
  hotelNameHandler: Subscription | undefined;

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

    this.hotelNameHandler = this.hotel.subscribe(hotel => {
      this.bookingForm.patchValue({
        hotelName: hotel!.name
      });
    });

    this.reviewForm = this.fb.group({
      rating: [10, {validators: [Validators.required]}],
      comment: ['', {validators: [Validators.required]}]
    }, {updateOn: 'change'});

    this.comments = this.hotelService.getComments();
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
      guestName: ['', {validators: [Validators.required]}],
      age: new FormControl(''),
    });
  }

  addGuest() {
    this.guests.push(this.addGuestControl());
  }

  removeGuest(i: number) {
    this.guests.removeAt(i);
  }

  book() {
    this.bookingService.bookRoom(this.bookingForm.getRawValue());
    this.clear();
    this.formSubmitted = true;
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

  changeFormSubmittedState() {
    this.formSubmitted = false;
  }

  changeReviewSubmittedState() {
    this.reviewSubmitted = false;
  }

  leaveReview() {
    this.reviewSubmitted = true;
    this.clearReviewForm();
  }

  clearReviewForm() {
    this.reviewForm.reset({
      rating: 10,
      comment: ''
    });
  }

  loadMoreReviews() {
    this.page++;
  }

  ngOnDestroy(): void {
    this.hotelNameHandler?.unsubscribe();
  }
}
