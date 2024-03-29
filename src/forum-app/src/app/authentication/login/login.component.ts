import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../core/service/user.service';
import { emailValidator } from '../utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  errorMessage: string = '';

  loginFormGroup: FormGroup = this.formBuilder.group({
    email: new FormControl('', [Validators.required, emailValidator]),
    password: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login(): void {
    this.errorMessage = '';
    this.userService.login$(this.loginFormGroup.value).subscribe({
      next: (user) => {
        localStorage.setItem('isLogged', JSON.stringify(true));
        localStorage.setItem('loggedInUser', JSON.stringify(user));
        this.router.navigate(['/home']);
      },
      complete: () => {
        console.log('login stream completed');
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      },
    });
    this.loginFormGroup.reset();
  }

  get f() {
    return this.loginFormGroup.controls;
  }
}
