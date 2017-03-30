import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Kinvey } from 'kinvey-angular2-sdk';

@Component({
  selector: 'login',
  moduleId: module.id,
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username: string;
  password: string;
  error: Kinvey.KinveyBaseError;

  constructor(private router: Router) {}

  login(): void {
    this.error = undefined;

    Kinvey.User.login(this.username, this.password)
      .then(() => this.router.navigate(['/']))
      .catch((error: Kinvey.KinveyBaseError) => {
        this.error = error;
      });
  }

  loginWithMIC(): void {
    this.error = undefined;

    Kinvey.User.loginWithMIC('<micRedirectUri>')
      .then(() => this.router.navigate(['/']))
      .catch((error: Kinvey.KinveyBaseError) => {
        this.error = error;
      });
  }
}
