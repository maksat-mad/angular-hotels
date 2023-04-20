import {inject, Injectable} from '@angular/core';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  router = inject(Router);
  isLoading = false;
  hasError = false;
  isSuccess = false;

  isAuthenticated() {
    const user = getAuth().currentUser;
    return !!user;
  }

  signUp(email: string, password: string) {
    this.hasError = false;
    this.isLoading = true;
    createUserWithEmailAndPassword(getAuth(), email, password)
      .then(() => {
        this.isSuccess = true;
      })
      .catch(() => {
        this.hasError = true;
        this.isSuccess = false;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  login(email: string, password: string) {
    this.hasError = false;
    this.isLoading = true;
    signInWithEmailAndPassword(getAuth(), email, password)
      .then(() => {
        this.router.navigate(['/profile']);
      })
      .catch(() => {
        this.hasError = true;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  logout() {
    signOut(getAuth())
      .then(() => {
        this.router.navigate(['/auth/login']);
      });
  }
}
