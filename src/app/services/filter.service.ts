import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Filter} from "../models/hotels/HotelsInfo";
import {defaultFilter} from "../data/HotelsData";

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filterInfoBSubject = new BehaviorSubject<Filter>(defaultFilter);

  setFilter(filter: Filter) {
    this.filterInfoBSubject.next(filter);
  }
}
