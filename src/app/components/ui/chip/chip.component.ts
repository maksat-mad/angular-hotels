import {Component, inject, Input} from '@angular/core';
import {Amenity, Filter} from "../../../models/hotels/HotelsInfo";
import {FilterService} from "../../../services/filter.service";
import {defaultFilter} from "../../../data/hotels-data/HotelsData";

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent {
  filterService = inject(FilterService);
  @Input() amenity!: Amenity;
  @Input() filter!: Filter;

  removeAmenity() {
    // this.filterService.setFilter({...this.filter, this.key: defaultFilter.this.key})
  }
}
