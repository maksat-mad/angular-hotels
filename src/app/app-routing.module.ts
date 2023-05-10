import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {path: 'hotels',
    loadChildren: () => import('./modules/hotels/hotels.module').then(c => c.HotelsModule)
  },
  {
    path: 'contacts',
    loadComponent: () => import('./pages/contacts/contacts.component').then(c => c.ContactsComponent)
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then(c => c.AuthModule)
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
