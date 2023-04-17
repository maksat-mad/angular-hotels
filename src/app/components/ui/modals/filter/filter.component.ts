import {Component, inject} from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  formBuilder = inject(FormBuilder);
  router = inject(Router);
  firstClick = true;

  form = this.formBuilder.nonNullable.group({
    propertyName: [],
    apartment: [],
    hotel: [],
    hostel: [],
    price: [],
    star1: [],
    star2: [],
    star3: [],
    star4: [],
    star5: [],
    rating: [],
    breakfast: [],
    lunch: [],
    dinner: [],
    all_inclusive: [],
    place: [],
    parking: [],
    pool: [],
    spa: [],
    pet_friendly: [],
    wifi: [],
    air_conditioned: [],
    restaurant: [],
    sea_view: [],
    gym: []
  }, { updateOn: 'blur' });


  onSubmit() {
    console.log(this.form.value);
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
