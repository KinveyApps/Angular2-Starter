import { Kinvey } from 'kinvey-angular2-sdk';

export class Book implements Kinvey.Entity {
  _id: string;
  _acl: {};
  _kmd: {};
  author: string;
  title: string;
  isbn: string;
  review: string;
  selected: boolean;
}
