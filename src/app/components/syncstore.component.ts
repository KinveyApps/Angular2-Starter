import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kinvey } from 'kinvey-angular2-sdk';

@Component({
  selector: 'syncstore',
  moduleId: module.id,
  templateUrl: './syncstore.component.html',
})
export class SyncStoreComponent implements OnInit  {
  books: {}[];

  constructor(private router: Router, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    const store = Kinvey.DataStore.collection('books', Kinvey.DataStoreType.Sync) as Kinvey.SyncStore;
    store.find()
      .subscribe((books: {}[]) => {
        this.books = books;
        this.cd.detectChanges();
      });
  }
}
