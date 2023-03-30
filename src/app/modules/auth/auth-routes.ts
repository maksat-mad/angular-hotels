import {Routes} from "@angular/router";
import {LoginComponent} from "../../pages/auth/login/login.component";
import {SignUpComponent} from "../../pages/auth/sign-up/sign-up.component";
import {ForgotPasswordComponent} from "../../pages/auth/forgot-password/forgot-password.component";

export const authRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      },
      {
        path: 'forgot-password',
        component: ForgotPasswordComponent
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ]
  }
];
