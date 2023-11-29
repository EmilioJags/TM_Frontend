import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../backend-service.service';
import { Person } from '../Model/Person';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addPerson',
  templateUrl: './addPerson.component.html',
  styleUrls: ['./addPerson.component.css'],
})
export class AddPersonComponent implements OnInit {
  constructor(public service: BackendServiceService, private router: Router) {}

  newPerson: Person = {};
  ngOnInit() {}

  saveData() {
    if (!this.validFields()) return;
    const name = (document.getElementById('name-input') as HTMLInputElement)
      .value;
    const job = (document.getElementById('job-input') as HTMLInputElement)
      .value;
    this.newPerson.name = name;
    this.newPerson.job = job;
    this.service.saveData(this.newPerson);
    this.router.navigateByUrl('/home');
  }

  validFields() {
    if (
      (document.getElementById('name-input') as HTMLInputElement).value === ''
    )
      return false;
    if ((document.getElementById('job-input') as HTMLInputElement).value === '')
      return false;
    return true;
  }
  reset() {
    (document.getElementById('name-input') as HTMLInputElement).value = '';
    (document.getElementById('job-input') as HTMLInputElement).value = '';
  }
}
