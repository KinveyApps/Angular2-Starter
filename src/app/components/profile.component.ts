import { Component, OnInit } from '@angular/core';
import { Kinvey } from 'kinvey-angular2-sdk';

@Component({
  selector: 'profile',
  moduleId: module.id,
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  user: {};
  success: {};
  error: Kinvey.KinveyBaseError;

  ngOnInit(): void {
    const user: Kinvey.User = Kinvey.User.getActiveUser();
    this.user = user.data;
  }

  update(): void {
    this.success = undefined;
    this.error = undefined;

    Kinvey.User.update(this.user)
      .then(() => {
        this.success =  { message: 'Profile updated!' };
      })
      .catch((error: Kinvey.KinveyBaseError) => {
        this.error = error;
      });
  }
}
