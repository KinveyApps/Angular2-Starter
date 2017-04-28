import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Kinvey } from 'kinvey-angular2-sdk';
import { Book } from '../../models/book';

@Component({
  selector: 'create',
  moduleId: module.id,
  templateUrl: './create.component.html',
})
export class CreateComponent implements OnInit {
  dataStoreType = Kinvey.DataStoreType.Cache;
  book = new Book();

  constructor(private route: ActivatedRoute, private router: Router, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams) => {
      this.dataStoreType = queryParams['dataStoreType'];
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
