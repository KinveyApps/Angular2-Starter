import { Component } from '@angular/core';
import { Kinvey } from 'kinvey-angular2-sdk';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`
})
export class AppComponent  {
  name = 'Angular';

  constructor() {
    Promise.resolve(Kinvey.User.getActiveUser())
      .then((activeUser) => {
        if (!activeUser) {
          return Kinvey.User.login('<username>', '<username>');
        }

        return activeUser;
      })
      .then((activeUser: Kinvey.User) => {
        const store = Kinvey.DataStore.collection('books', Kinvey.DataStoreType.Cache);
        store.useDeltaFetch = true;
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
