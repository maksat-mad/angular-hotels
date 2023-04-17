import {Component, inject, Input} from '@angular/core';
import {Amenity, Filter} from "../../../models/hotels/HotelsInfo";
import {FilterService} from "../../../services/filter.service";
import {defaultFilter} from "../../../data/hotels-data/HotelsData";

@Component({
  selector: 'app-chip',
  template: `<div class="chip">
    {{amenity.value | translate}}
    <span (click)="removeAmenity()" class="close-btn">&times;</span>
  </div>`,
  styles: [`.chip {
    padding: 5px 10px;
    color: #212529;
    font-size: 14px;
    border-radius: 25px;
    background-color: #ced4da;
    font-family: Roboto, sans-serif;
  }

  .close-btn {
    padding-left: 10px;
    color: black;
    font-weight: bolder;
    float: right;
    font-size: 20px;
    cursor: pointer;
    border-radius: 50%;
    text-align: center;
  }

  .close-btn:hover {
    color: #f44336;
  }
  `]
})
export class ChipComponent {
  filterService = inject(FilterService);
  @Input() amenity!: Amenity;
  @Input() filter!: Filter;

  removeAmenity() {
    const updatedFilter: any = { ...this.filter };
    updatedFilter[this.amenity.key as keyof Filter] = defaultFilter[this.amenity.key as keyof Filter];
    this.filterService.setFilter(<Filter> updatedFilter);
  }
}
