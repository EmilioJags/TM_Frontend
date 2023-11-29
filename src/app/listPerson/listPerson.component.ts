import { Component, OnInit } from '@angular/core';
import { BackendServiceService } from '../backend-service.service';
import { Person } from '../Model/Person';
@Component({
  selector: 'app-listPerson',
  templateUrl: './listPerson.component.html',
  styleUrls: ['./listPerson.component.css'],
})
export class ListPersonComponent implements OnInit {
  constructor(private personService: BackendServiceService) {}

  listPerson: Person[] = [];
  ngOnInit() {
    this.personService.getAll().subscribe((res) => (this.listPerson = res));
  }

  clickEd() {
    console.log('clicked ....');
  }
}
