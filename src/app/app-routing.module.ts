import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {HotelsComponent} from "./pages/hotels/hotels.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {AboutUsComponent} from "./pages/about-us/about-us.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'hotels', component: HotelsComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
