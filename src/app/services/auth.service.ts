import { Injectable, inject, signal } from '@angular/core';
import {Auth, createUserWithEmailAndPassword, updateProfile, user} from '@angular/fire/auth';
import {Observable, from} from 'rxjs';
import {UserInterface} from '../user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth = inject(Auth);
  user$ = user(this.auth);
  currentUserSig = signal<UserInterface | null | undefined>(undefined);

  register(email: string, username: string, password: string) : Observable<void>
  {
    const promise = createUserWithEmailAndPassword(
      this.auth,
      email,
      password,
    ).then(response => updateProfile(response.user, {displayName: username}));

    return from(promise);
  }
}
