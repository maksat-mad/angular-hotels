import {inject, Injectable} from '@angular/core';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updatePassword} from "firebase/auth";
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

  getCurrentUserEmail() {
    return getAuth().currentUser?.email;
  }

  signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(getAuth(), email, password);
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(getAuth(), email, password);
  }

  sendPasswordResetEmail(email: string) {
    return sendPasswordResetEmail(getAuth(), email);
  }

  updatePassword(newPassword: string) {
    return updatePassword(getAuth().currentUser!, newPassword);
  }

  logout() {
    signOut(getAuth())
      .then(() => {
        this.router.navigate(['/auth/login']);
      });
  }

  logoutForSignUp() {
    signOut(getAuth());
  }
}
