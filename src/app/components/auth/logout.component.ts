import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kinvey } from 'kinvey-angular2-sdk';

@Component({
  selector: 'logout',
  moduleId: module.id,
  templateUrl: './logout.component.html',
})
export class LogoutComponent implements OnInit  {
  constructor(private router: Router) {}

  ngOnInit() {
    Kinvey.User.logout()
      .then(() => this.router.navigate(['/login']));
  }
}
