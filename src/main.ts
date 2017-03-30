import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Kinvey } from 'kinvey-angular2-sdk';

import { AppModule } from './app/app.module';

Kinvey.initialize({
  appKey: '<appKey>',
  appSecret: '<appSecret>'
})
  .then(() => {
    enableProdMode();
    platformBrowserDynamic().bootstrapModule(AppModule);
  });
