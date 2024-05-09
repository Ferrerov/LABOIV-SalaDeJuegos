import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    formLogin: FormGroup;
    errorMessage: string | null = null;

  constructor(private userService: UserService,
    private router: Router
  ) {
      this.formLogin = new FormGroup({
        email: new FormControl(),
        password: new FormControl()
      })
    }

  onSubmit() {
    this.userService.login(this.formLogin.value)
    .then(response => {
      console.log(response);
      this.router.navigateByUrl('/home');
    })
    .catch(error => {
      console.log(error);
      switch(error.code) {
        case 'auth/missing-email': this.errorMessage = 'Ingrese un email valido.'; break;
        case 'auth/missing-password': this.errorMessage = 'Ingrese la contraseña.'; break;
        case 'auth/invalid-email': this.errorMessage = 'El correo electrónico no es valido.'; break;
        case 'auth/invalid-credential': this.errorMessage = 'Las credenciales no coinciden o no esta registrado.'; break;
        default: this.errorMessage = 'Error al iniciar sesion.';
        }
    });
  } 

  onClick()
  {
    this.router.navigateByUrl('/register');
  }
}
