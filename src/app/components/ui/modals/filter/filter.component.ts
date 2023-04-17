import {Component, inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {FilterService} from "../../../../services/filter.service";
import {Filter} from "../../../../models/hotels/HotelsInfo";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  filterService = inject(FilterService);
  formBuilder = inject(FormBuilder);
  router = inject(Router);
  firstClick = true;

  form = this.formBuilder.nonNullable.group({
    propertyName: [''],
    apartment: [false],
    hotel: [false],
    hostel: [false],
    price: [500],
    star1: [false],
    star2: [false],
    star3: [false],
    star4: [false],
    star5: [false],
    rating: ['0'],
    breakfast: [false],
    lunch: [false],
    dinner: [false],
    all_inclusive: [false],
    place: ['0'],
    parking: [false],
    pool: [false],
    spa: [false],
    pet_friendly: [false],
    wifi: [false],
    air_conditioned: [false],
    restaurant: [false],
    sea_view: [false],
    gym: [false]
  }, { updateOn: 'blur' });

  ngOnInit(): void {
    const filterInfoBSubject = this.filterService.filterInfoBSubject.subscribe((filter) => {
      this.form.reset(filter);
    });
    filterInfoBSubject.unsubscribe();
  }

  onSubmit() {
    this.filterService.setFilter(<Filter> this.form.value);
    this.router.navigate(['/hotels/', { outlets: {modal: null} }]);
  }

  clearModal() {
    this.form.reset();
  }

  clickedOutside() {
    if (this.firstClick) {
      this.firstClick = false;
      return;
    }
    this.router.navigate(['/hotels/', { outlets: {modal: null} }]);
  }
}
