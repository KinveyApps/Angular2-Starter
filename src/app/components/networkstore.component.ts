import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kinvey } from 'kinvey-angular2-sdk';

@Component({
  selector: 'networkstore',
  moduleId: module.id,
  templateUrl: './networkstore.component.html',
})
export class NetworkStoreComponent implements OnInit  {
  books: {}[];

  constructor(private router: Router, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    const store = Kinvey.DataStore.collection('books', Kinvey.DataStoreType.Network) as Kinvey.NetworkStore;
    store.find()
      .subscribe((books: {}[]) => {
        this.books = books;
        this.cd.detectChanges();
      });
  }
}
