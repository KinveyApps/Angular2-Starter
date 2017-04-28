import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './components/app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent }  from './components/auth/login.component';
import { LogoutComponent }  from './components/auth/logout.component';
import { SignupComponent }  from './components/auth/signup.component';

import { CreateComponent } from './components/datastore/create.component';
import { DataStoreComponent } from './components/datastore/datastore.component';
import { UpdateComponent} from './components/datastore/update.component';

import { FilesComponent } from './components/files/files.component';
import { UploadComponent} from './components/files/upload.component';

import { NavbarComponent }  from './components/navbar.component';
import { ProfileComponent } from './components/profile.component';

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

    CreateComponent,
    DataStoreComponent,
    UpdateComponent,

    FilesComponent,
    NavbarComponent,
    ProfileComponent,
    UploadComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
