import {inject, Injectable} from '@angular/core';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  router = inject(Router);

  isAuthenticated() {
    const user = getAuth().currentUser;
    return !!user;
  }

  signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(getAuth(), email, password);
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(getAuth(), email, password);
  }

  logout() {
    signOut(getAuth())
      .then(() => {
        this.router.navigate(['/auth/login']);
      });
  }
}
