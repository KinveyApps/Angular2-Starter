import { Component } from '@angular/core';
import { Kinvey } from 'kinvey-angular2-sdk';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`
})
export class AppComponent  {
  name = 'Angular';

  constructor(kinvey: Kinvey) {
    kinvey.initialize({
      appKey: 'kid_WJt3WXdOpx',
      appSecret: '7cfd74e7af364c8f90b116c835f92e7d'
    })
      .then((activeUser: Kinvey.User|null) => {
        if (!activeUser) {
          return Kinvey.User.login('admin', 'admin');
        }

        return activeUser;
      })
      .then((activeUser: Kinvey.User) => {
        const store = Kinvey.DataStore.collection('books', Kinvey.DataStoreType.Sync) as Kinvey.SyncStore;
        return store.find().toPromise();
      })
      .then((books: Array<{}>) => {
        console.log(books);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
}
