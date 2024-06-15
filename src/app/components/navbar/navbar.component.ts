/*import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'
import { UserService } from '../../services/user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(protected userService: UserService) {
  }

  logout()
  {
    this.userService.logout()
  }
}*/


import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { AuthService} from '../../services/auth.service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  title = 'Ferrero - Sala de Juegos';
  authService = inject(AuthService);
  userService = inject(UserService);

  ngOnInit(): void {
    this.authService.user$.subscribe(user =>{
      if(user)
      {
        this.authService.currentUserSig.set({
          email: user.email!,
          username: user.displayName!,
          uid: user.uid!
        });
      }
      else
      {
        this.authService.currentUserSig.set(null);
      }
      console.log(this.authService.currentUserSig());
    });
  }

  logout()
  {
    this.userService.logout()
  }
}

