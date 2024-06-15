import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'Ferrero - Sala de Juegos';
  //authService = inject(AuthService);

  /*ngOnInit(): void {
    this.authService.user$.subscribe(user =>{
      if(user)
      {
        this.authService.currentUserSig.set({
          email: user.email!,
          username: user.displayName!
        });
      }
      else
      {
        this.authService.currentUserSig.set(null);
      }
      console.log(this.authService.currentUserSig());
    });
  }*/
}
