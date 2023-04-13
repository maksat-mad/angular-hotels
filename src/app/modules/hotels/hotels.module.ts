import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsRoutingModule } from './hotels-routing.module';
import {HotelsComponent} from "../../pages/hotels/hotels.component";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [
    HotelsComponent
  ],
  imports: [
    CommonModule,
    HotelsRoutingModule,
    TranslateModule
  ]
})
export class HotelsModule { }
