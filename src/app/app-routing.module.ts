import { NgModule, Injectable } from '@angular/core';
import { CanActivate, RouterModule, Router, Routes } from '@angular/router';
import { Kinvey } from 'kinvey-angular2-sdk';

import { LoginComponent }  from './components/auth/login.component';
import { LogoutComponent }  from './components/auth/logout.component';
import { SignupComponent }  from './components/auth/signup.component';

import { CreateComponent } from './components/datastore/create.component';
import { DataStoreComponent } from './components/datastore/datastore.component';
import { UpdateComponent} from './components/datastore/update.component';

import { FilesComponent } from './components/files/files.component';
import { UploadComponent} from './components/files/upload.component';

import { NavbarComponent } from './components/navbar.component';
import { ProfileComponent } from './components/profile.component';

@Injectable()
export class NoAuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    const activeUser = Kinvey.User.getActiveUser();

    if (activeUser) {
      return true;
    }

    // Navigate to the login page
    this.router.navigate(['/login']);
    return false;
  }
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    const activeUser = Kinvey.User.getActiveUser();

    if (!activeUser) {
      return true;
    }

    // Navigate to the main page
    this.router.navigate(['']);
    return false;
  }
}

const appRoutes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    canActivate: [NoAuthGuard],
    children: [
      { path: '', component: DataStoreComponent },
      { path: 'create', component: CreateComponent },
      { path: 'update/:id', component: UpdateComponent },

      { path: 'files', component: FilesComponent },
      { path: 'upload', component: UploadComponent },

      { path: 'profile', component: ProfileComponent }
    ]
  },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'logout', component: LogoutComponent },
  { path: 'signup', component: SignupComponent, canActivate: [AuthGuard] }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    NoAuthGuard
  ]
})
export class AppRoutingModule {}
