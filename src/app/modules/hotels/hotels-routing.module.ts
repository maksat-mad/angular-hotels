import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HotelsComponent} from "../../pages/hotels/hotels.component";
import {FilterComponent} from "../../components/ui/modals/filter/filter.component";

const routes: Routes = [
  {
    path: '',
    component: HotelsComponent,
    children: [
      {
        path: 'form',
        component: FilterComponent,
        outlet: 'modal'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule { }
