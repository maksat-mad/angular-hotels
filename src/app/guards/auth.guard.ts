import {inject, Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {AuthService} from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  authService = inject(AuthService);

  canActivate() {
    return this.authService.isAuthenticated();
  }
}
