import { Kinvey } from 'kinvey-angular2-sdk';

export class File implements Kinvey.File {
  _id: string;
  _filename: string;
  _downloadURL: string;
  _expiresAt: string;
  _public: boolean;
  size: number;
  mimeType: string;
  selected: boolean;
}
