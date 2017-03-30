import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kinvey } from 'kinvey-angular2-sdk';

@Component({
  selector: 'cachestore',
  moduleId: module.id,
  templateUrl: './cachestore.component.html'
})
export class CacheStoreComponent implements OnInit  {
  books: {}[];

  constructor(private router: Router, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    const store = Kinvey.DataStore.collection('books', Kinvey.DataStoreType.Cache) as Kinvey.CacheStore;
    store.find()
      .subscribe((books: {}[]) => {
        this.books = books;
        this.cd.detectChanges();
      });
  }
}
