import { Component } from '@angular/core';
import { Kinvey } from 'kinvey-angular2-sdk';

@Component({
  selector: 'upload',
  moduleId: module.id,
  templateUrl: './upload.component.html',
})
export class UploadComponent {
  file: any;
  filename: string;
  public: boolean;
  showProgress = false;
  success: {};
  error: Kinvey.KinveyBaseError;

  fileChangeEvent(fileInput: any) {
    this.file = fileInput.target.files[0];
  }

  upload(): void {
    this.error = undefined;
    this.success = undefined;

    if (this.file) {
      const filename = this.filename || this.filename !== '' ? this.filename : this.file.name;

      // Show progress
      this.showProgress = true;

      // Upload the file
      Kinvey.Files.upload(
        this.file, // File to upload
        { filename: filename, public: this.public }, // metadata
        { timeout: 10 * 60 * 1000 } // 10 minute timeout
      )
        .then(() => {
          // Hide progress
          this.showProgress = false;

          // Show success message
          this.success = { message: 'File Uploaded!' };
        })
        .catch((error: Kinvey.KinveyBaseError) => {
          // Hide progress
          this.showProgress = false;

          // Show error message
          this.error = error;
        });
    } else {
      // Hide progress
      this.showProgress = false;

      // Show error message
      this.error = new Kinvey.KinveyError('Please select a file to upload.', '', -1, '');
    }
  }
}
