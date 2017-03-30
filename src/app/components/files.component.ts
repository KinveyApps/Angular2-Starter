import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kinvey } from 'kinvey-angular2-sdk';

@Component({
  selector: 'files',
  moduleId: module.id,
  templateUrl: './files.component.html',
})
export class FilesComponent implements OnInit  {
  files: {}[];

  constructor(private router: Router, private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    Kinvey.Files.find()
      .then((files: {}[]) => {
        this.files = files;
        this.cd.detectChanges();
      });
  }
}
