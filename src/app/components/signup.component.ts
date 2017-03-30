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
  error: Kinvey.KinveyBaseError;

  constructor(private router: Router) {}

  signup(): void {
    this.error = undefined;

    Kinvey.User.signup(this.user)
      .then(() => this.router.navigate(['/']))
      .catch((error: Kinvey.KinveyBaseError) => {
        this.error = error;
      });
  }
}
