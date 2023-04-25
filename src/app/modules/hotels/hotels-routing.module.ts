import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HotelsComponent} from "../../pages/hotels/hotels.component";
import {FilterComponent} from "../../components/ui/modals/filter/filter.component";
import {HotelComponent} from "../../pages/hotel/hotel.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HotelsComponent,
      },
      {
        path: 'form',
        component: FilterComponent,
        outlet: 'modal'
      },
      {
        path: ':hotelId',
        component: HotelComponent
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HotelsRoutingModule {
}
