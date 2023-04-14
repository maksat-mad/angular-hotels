import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsRoutingModule } from './hotels-routing.module';
import {HotelsComponent} from "../../pages/hotels/hotels.component";
import {TranslateModule} from "@ngx-translate/core";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    HotelsComponent
  ],
    imports: [
        CommonModule,
        HotelsRoutingModule,
        TranslateModule,
        MatSelectModule
    ]
})
export class HotelsModule { }
