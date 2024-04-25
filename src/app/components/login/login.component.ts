import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    formLogin: FormGroup;

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
    .catch(error => console.log(error));
  } 

  onClick()
  {
    this.router.navigateByUrl('/register');
  }
}
