import { Injectable, Inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, signOut } from '@angular/fire/auth';

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

  checkUserLogged()
  {
    const auth = getAuth();
    return auth.currentUser;
  }

  async logout()
  {
    return this.auth.signOut();
  }

}
