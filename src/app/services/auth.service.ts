import {Injectable} from '@angular/core';
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signUp(email: string, password: string) {
    return createUserWithEmailAndPassword(getAuth(), email, password);
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(getAuth(), email, password);
  }
}
