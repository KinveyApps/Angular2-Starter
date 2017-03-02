import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Kinvey } from 'kinvey-angular2-sdk';

import { AppModule } from './app/app.module';

Kinvey.initialize({
  appKey: 'kid_WJt3WXdOpx',
  appSecret: '7cfd74e7af364c8f90b116c835f92e7d'
})
  .then(() => {
    platformBrowserDynamic().bootstrapModule(AppModule);
  });
