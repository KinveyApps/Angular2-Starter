import { NgModule, Injectable } from '@angular/core';
import { CanActivate, RouterModule, Router, Routes } from '@angular/router';
import { Kinvey } from 'kinvey-angular2-sdk';

import { LoginComponent } from './components/login.component';
import { LogoutComponent } from './components/logout.component';
import { SignupComponent } from './components/signup.component';

import { CacheStoreComponent } from './components/cachestore.component';
import { FilesComponent } from './components/files.component';
import { NavbarComponent } from './components/navbar.component';
import { NetworkStoreComponent } from './components/networkstore.component';
import { ProfileComponent } from './components/profile.component';
import { SyncStoreComponent } from './components/syncstore.component';
import { UploadComponent } from './components/upload.component';

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
      { path: '', component: CacheStoreComponent, data: [] },
      { path: 'myfiles', component: FilesComponent },
      { path: 'networkstore', component: NetworkStoreComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'syncstore', component: SyncStoreComponent },
      { path: 'upload', component: UploadComponent }
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
