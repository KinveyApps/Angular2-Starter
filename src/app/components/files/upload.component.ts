import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Kinvey } from 'kinvey-angular2-sdk';

@Component({
  selector: 'upload',
  moduleId: module.id,
  templateUrl: './upload.component.html',
})
export class UploadComponent {
  file: File;
  filename: string;
  public: boolean;
  showProgress = false;

  constructor(private router: Router) {}

  fileChangeEvent(fileInput: any) {
    this.file = fileInput.target.files[0];
  }

  upload() {
    if (this.file) {
      const filename = this.filename || this.filename !== '' ? this.filename : this.file.name;

      // Show progress
      this.showProgress = true;

      // Create file metadata
      let metadata: Kinvey.FileMetadata = {
        filename: filename,
        public: this.public
      };

      // Create request options
      let options: Kinvey.RequestOptions = {
        timeout: 600000 // 10 minute timeout
      };

      // Upload the file
      Kinvey.Files.upload(
        this.file, // File to upload
        metadata,
        options
      )
        .then(() => {
          this.router.navigate(['/files']);
        })
        .catch((error: Kinvey.BaseError) => {
          // Hide progress
          this.showProgress = false;

          // Show error message
          alert(error.message);
        });
    } else {
      // Hide progress
      this.showProgress = false;

      // Show error message
      alert('Please select a file to upload.');
    }
  }
}
