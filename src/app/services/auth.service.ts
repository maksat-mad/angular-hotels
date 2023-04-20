import {Injectable} from '@angular/core';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false;
  isLoading = false;
  hasError = false;
  isSuccess = false;

  signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(getAuth(), email, password)
      .then(() => {
        this.isSuccess = true;
        this.isAuthenticated = true;
      })
      .catch(() => {
        this.hasError = true;
        this.isAuthenticated = false;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(getAuth(), email, password);
  }
}
