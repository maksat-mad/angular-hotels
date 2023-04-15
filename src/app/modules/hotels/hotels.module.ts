import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsRoutingModule } from './hotels-routing.module';
import {HotelsComponent} from "../../pages/hotels/hotels.component";
import {TranslateModule} from "@ngx-translate/core";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MAT_DATE_LOCALE, MatNativeDateModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {FilterComponent} from '../../components/ui/modals/filter/filter.component';
import {SharedModule} from "../shared.module";

@NgModule({
  declarations: [
    HotelsComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule,
    TranslateModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    SharedModule
  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE,
      useValue: 'en-GB'
    }
  ]
})
export class HotelsModule { }