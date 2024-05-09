import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth) { }

  async register({email, password}: any)
  {
    return await createUserWithEmailAndPassword(this.auth, email, password);
  }
  async login({ email, password }: any) {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  cheakUserLogged()
  {
    const auth = getAuth();
    return auth.currentUser;
  }
}
