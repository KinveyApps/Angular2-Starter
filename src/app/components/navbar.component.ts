import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app',
  moduleId: module.id,
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(private router: Router) {}

  logout(): void {
    this.router.navigate(['/logout']);
  }
}
