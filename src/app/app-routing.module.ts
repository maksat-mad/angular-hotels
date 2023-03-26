import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {HotelsComponent} from "./pages/hotels/hotels.component";
import {NotfoundComponent} from "./pages/notfound/notfound.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hotels', component: HotelsComponent},
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
