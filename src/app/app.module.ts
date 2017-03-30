import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './components/app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent }  from './components/login.component';
import { LogoutComponent }  from './components/logout.component';
import { SignupComponent }  from './components/signup.component';

import { CacheStoreComponent } from './components/cachestore.component';
import { FilesComponent } from './components/files.component';
import { NavbarComponent }  from './components/navbar.component';
import { NetworkStoreComponent } from './components/networkstore.component';
import { ProfileComponent } from './components/profile.component';
import { SyncStoreComponent } from './components/syncstore.component';
import { UploadComponent} from './components/upload.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,

    LoginComponent,
    LogoutComponent,
    SignupComponent,

    CacheStoreComponent,
    FilesComponent,
    NavbarComponent,
    NetworkStoreComponent,
    ProfileComponent,
    SyncStoreComponent,
    UploadComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
