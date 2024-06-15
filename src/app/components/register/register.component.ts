import { Component, inject } from '@angular/core';
import { Validators, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent { 
  /*formReg: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private userService: UserService,
    private router: Router
  )
  {
    this.formReg = new FormGroup(
      {email: new FormControl(), username: new FormControl() ,password: new FormControl()}
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
    });*/

    authService = inject(AuthService);
    fb = inject(FormBuilder);
    router = inject(Router);

    form = this.fb.nonNullable.group({
      email : ['', Validators.required],
      username : ['', Validators.required],
      password : ['', Validators.required]
    });
    errorMessage: string | null = null;

    onSubmit(): void{
      const rawForm = this.form.getRawValue();
      

    this.authService
      .register(rawForm.email, rawForm.username,rawForm.password)
      .subscribe({
        next: () => {
          this.router.navigateByUrl('/home');
        },
        error: (error) => {
          console.log(error);
          if (error.code === 'auth/email-already-in-use') {
            this.errorMessage = 'El correo electrónico ya está en uso.';
          } else {
            this.errorMessage = 'Se produjo un error al registrar el usuario.';
          }
        }
      })
      
  }
}
