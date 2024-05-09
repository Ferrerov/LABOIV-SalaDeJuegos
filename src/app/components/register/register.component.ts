import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  formReg: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private userService: UserService,
    private router: Router
  )
  {
    this.formReg = new FormGroup(
      {email: new FormControl(), password: new FormControl()}
    );
  }

  onSubmit()
  {
    this.userService.register(this.formReg.value)
    .then(response =>
      {
        console.log(response);
        //this.router.navigate(['/login']);
        this.userService.login(this.formReg.value);
        this.router.navigateByUrl('/home');
      }
    )
    .catch(error => {
      console.log(error);
      if (error.code === 'auth/email-already-in-use') {
        this.errorMessage = 'El correo electrónico ya está en uso.';
      } else {
        this.errorMessage = 'Se produjo un error al registrar el usuario.';
      }
    });
  }
}
