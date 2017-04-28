import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Kinvey } from 'kinvey-angular2-sdk';
import { Book } from '../../models/book';

@Component({
  selector: 'update',
  moduleId: module.id,
  templateUrl: './update.component.html',
})
export class UpdateComponent implements OnInit {
  dataStoreType = Kinvey.DataStoreType.Cache;
  book = new Book();

  constructor(private route: ActivatedRoute, private router: Router, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams) => {
      this.dataStoreType = queryParams['dataStoreType'];
    });

    this.route.params.subscribe((params) => {
      let bookId = params['id'];
      const store = Kinvey.DataStore.collection<Book>('books', this.dataStoreType);
      store.findById(bookId)
        .subscribe((book) => {
          this.book = book;
          this.cd.detectChanges();
        }, (error) => {
          alert(error.message);
        });
    });
  }

  save() {
    const store = Kinvey.DataStore.collection<Book>('books', this.dataStoreType);
    store.save(this.book)
      .then(() => {
        const navigationExtras: NavigationExtras = { queryParams: { dataStoreType: this.dataStoreType } };
        this.router.navigate(['/'], navigationExtras);
      })
      .catch((error) => {
        alert(error.message);
      });
  }
}
