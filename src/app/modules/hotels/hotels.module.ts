import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HotelsRoutingModule} from './hotels-routing.module';
import {HotelsComponent} from "../../pages/hotels/hotels.component";
import {TranslateModule} from "@ngx-translate/core";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {FilterComponent} from '../../components/ui/modals/filter/filter.component';
import {SharedModule} from "../shared/shared.module";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {MatSliderModule} from "@angular/material/slider";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ChipComponent} from '../../components/ui/chip/chip.component';
import {CardComponent} from '../../components/ui/card/card.component';
import {NgbPagination, NgbRating} from "@ng-bootstrap/ng-bootstrap";
import {HotelComponent} from "../../pages/hotel/hotel.component";
import {ExitButtonComponent} from '../../components/ui/exit-button/exit-button.component';
import {MatExpansionModule} from "@angular/material/expansion";
import {ReviewCardComponent} from '../../components/ui/review-card/review-card.component';

@NgModule({
  declarations: [
    HotelsComponent,
    FilterComponent,
    ChipComponent,
    CardComponent,
    HotelComponent,
    ExitButtonComponent,
    ReviewCardComponent
  ],
    imports: [
        CommonModule,
        HotelsRoutingModule,
        TranslateModule,
        MatSelectModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatButtonModule,
        SharedModule,
        MatInputModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSliderModule,
        FormsModule,
        ReactiveFormsModule,
        NgbPagination,
        NgbRating,
        MatExpansionModule
    ],
  providers: [
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'en-GB'
    }
  ]
})
export class HotelsModule { }
