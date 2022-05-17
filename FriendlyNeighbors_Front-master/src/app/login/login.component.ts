import { Component, OnInit } from '@angular/core';
import { Neighborhood } from '../neighborhood/neighborhood';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from './login.service';
import { Login } from './login';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Resident } from '../resident/resident';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private toastr: ToastrService,
    private router: Router
  ) {}


  login: Login;

  incorrect: number = 0;
  active: boolean = true;

  LoginForm = new FormGroup({

    username: new FormControl(null),
    password: new FormControl(null),
  });

  onSubmit(): void {
    var username: string = this.LoginForm.value.username;
    var password: string = this.LoginForm.value.password;

    this.getLogin(username);
    this.router.navigateByUrl('/neighborhoods/1/residents/1');
  }

  getLogin(username: string): void {
    this.loginService
      .getLoginByUsername(username)
      .subscribe((login) => {
        this.login = login;

        console.log(this.login);

        this.authenticateLogin(this.LoginForm.get('password').value);
      });
  }

  authenticateLogin(password: string): void {
    const toastrConfig: Partial<IndividualConfig> = {
      timeOut: 1800,
    };

    const toastrConfig2: Partial<IndividualConfig> = {
      timeOut: 9000,
    };

    if (this.login.password === password) {
      this.toastr.success(
        `Welcome back, ${this.login.userName} \ud83d\udc95`,
        'Authenticated',
        toastrConfig
      );

      this.LoginForm.reset();
    } else {
      this.incorrect++;
      if (this.incorrect === 3) {
        this.incorrect = 0;
        this.active = false;
        this.toastr.error(
          `Too many incorrect attempt! Locked out for 5 seconds. 	\uD83D\uDE25p`,
          'Authentication Failed'
        );
        setTimeout(() => {
          this.active = true;
          this.toastr.success('Unblocked!');
        }, 5000);
      } else {
        this.toastr.error(
          `Incorrect password, try again. Attempt ${this.incorrect}`,
          'Authentication Failed',
          toastrConfig
        );
      }
      this.LoginForm.reset();
    }
  }

  ngOnInit() {


  }
}
