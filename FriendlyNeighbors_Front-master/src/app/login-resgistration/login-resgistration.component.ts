import { Component, OnInit } from '@angular/core';
import { NeighborhoodService } from '../neighborhood/neighborhood.service';
import { Neighborhood } from '../neighborhood/neighborhood';
import { ToastrService, IndividualConfig } from 'ngx-toastr';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../login/login.service';
import { Login } from '../login/login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-resgistration',
  templateUrl: './login-resgistration.component.html',
  styleUrls: ['./login-resgistration.component.css'],
})
export class LoginResgistrationComponent implements OnInit {
  constructor(
    private toastr: ToastrService,
    private neighborhoodService: NeighborhoodService,
    private loginService: LoginService,
    private router: Router
  ) {}

  neighborhoods: Array<Neighborhood>;
  chosenNeighborhood: Neighborhood;
  createdLoginId: number;

  persistedLogin: Login;

  residentLoginForm = new FormGroup({
    username: new FormControl(null),
    password: new FormControl(null),
    confirmPass: new FormControl(null),

  });

  onSubmit(): void {
    this.router.navigateByUrl('/')
    console.log(
      'Username:' +
        this.residentLoginForm.get('username').value +
        '\n' +
        'Password:' +
        this.residentLoginForm.get('password').value +
        'Conf Password:' +
        this.residentLoginForm.get('confirmPass').value
    );

    if (
      this.residentLoginForm.get('password').value !==
      this.residentLoginForm.get('confirmPass').value
    ) {
      this.toastr.error("Passwords don't match!");
      this.residentLoginForm.reset();
    }
  }



  addResidentLogin(): void {
    var username: string = this.residentLoginForm.value.username;
    var password: string = this.residentLoginForm.value.password;


    var login: Login = new Login(username, password);

    console.log(login);
    const toastrConfig: Partial<IndividualConfig> = {
      timeOut: 1800,
    };
    var loginName = this.residentLoginForm.value.username;

    this.loginService.addLogin(login).subscribe(
      (persistedLogin) => {
        this.persistedLogin = persistedLogin;
        this.residentLoginForm.reset();
        this.residentLoginForm.controls.neighborhood.setValue('Choose...');
        this.toastr.success(
          'The username ' + this.persistedLogin.userName + ' was added with id ' + this.persistedLogin.id,
          'Success',
          toastrConfig
        );

      },
      () => {
        this.residentLoginForm.reset();
      }
    );


  }






  ngOnInit() {



  }
}
