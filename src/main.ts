import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Kinvey } from 'kinvey-angular2-sdk';

import { AppModule } from './app/app.module';

const config: Kinvey.ClientConfig = {
  appKey: 'kid_rJQ3fa0il',
  appSecret: 'f934cde41bef41368bfa778692e690aa'
};

Kinvey.initialize(config)
  .then(() => {
    enableProdMode();
    platformBrowserDynamic().bootstrapModule(AppModule);
  });
