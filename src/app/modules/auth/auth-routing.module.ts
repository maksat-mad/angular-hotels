import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "../../pages/auth/login/login.component";
import {SignUpComponent} from "../../pages/auth/sign-up/sign-up.component";
import {ForgotPasswordComponent} from "../../pages/auth/forgot-password/forgot-password.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }