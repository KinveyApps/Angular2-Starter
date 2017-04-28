import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Kinvey } from 'kinvey-angular2-sdk';

@Component({
  selector: 'signup',
  moduleId: module.id,
  templateUrl: './signup.component.html',
})
export class SignupComponent {
  user: {};
  error: Kinvey.BaseError;

  constructor(private router: Router) {}

  signup() {
    this.error = undefined;

    Kinvey.User.signup(this.user)
      .then(() => this.router.navigate(['/']))
      .catch((error: Kinvey.BaseError) => {
        this.error = error;
      });
  }
}
