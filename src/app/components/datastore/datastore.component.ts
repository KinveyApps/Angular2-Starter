import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Kinvey } from 'kinvey-angular2-sdk';
import { Book } from '../../models/book';

@Component({
  selector: 'datastore',
  moduleId: module.id,
  templateUrl: './datastore.component.html'
})
export class DataStoreComponent implements OnInit  {
  dataStoreType = Kinvey.DataStoreType.Cache;
  books: Book[];

  constructor(private route: ActivatedRoute, private router: Router, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams) => {
      this.dataStoreType = queryParams['dataStoreType'];
      this.reload();
    });
  }

  reload() {
    const store = Kinvey.DataStore.collection<Book>('books', this.dataStoreType);
    store.find()
      .subscribe((books) => {
        this.books = books;
        this.cd.detectChanges();
      });
  }

  create() {
    const navigationExtras: NavigationExtras = { queryParams: { dataStoreType: this.dataStoreType } };
    this.router.navigate(['create'], navigationExtras);
  }

  update() {
    const books = this.books.filter(book => book.selected);

    if (books.length === 0) {
      return alert('Please select a book you would like to update.');
    }

    if (books.length > 1) {
      return alert('Please select only one book to update.');
    }

    const navigationExtras: NavigationExtras = { queryParams: { dataStoreType: this.dataStoreType } };
    this.router.navigate(['update', books[0]._id], navigationExtras);
  }

  remove() {
    const ids = this.books.filter(book => book.selected).map(book => book._id);
    const query = new Kinvey.Query().contains('_id', ids);
    const store = Kinvey.DataStore.collection<Book>('books', this.dataStoreType);
    store.remove(query)
      .then(() => {
        this.reload();
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  pull() {
    if (this.dataStoreType === Kinvey.DataStoreType.Network) {
      return alert('Unable to pull for a NetworkStore.');
    }

    const store = Kinvey.DataStore.collection<Book>('books', this.dataStoreType) as Kinvey.CacheStore<Book>;
    store.pull()
      .then((books) => {
        this.books = books;
        this.cd.detectChanges();
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  push() {
    if (this.dataStoreType === Kinvey.DataStoreType.Network) {
      return alert('Unable to push for a NetworkStore.');
    }

    const store = Kinvey.DataStore.collection<Book>('books', this.dataStoreType) as Kinvey.CacheStore<Book>;
    store.push()
      .then((result) => {
        alert(`Pushed ${result.length} ${result.length === 1 ? 'entity' : 'entities'} to the backend.`);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  clearSync() {
    if (this.dataStoreType === Kinvey.DataStoreType.Network) {
      return alert('Unable to clear the sync queue for a NetworkStore.');
    }

    const store = Kinvey.DataStore.collection<Book>('books', this.dataStoreType) as Kinvey.CacheStore<Book>;
    store.clearSync()
      .then((result) => {
        alert(`Cleared ${result.count} ${result.count === 1 ? 'entity' : 'entities'} from the sync queue.`);
      })
      .catch((error) => {
        alert(error.message);
      });
  }
}
