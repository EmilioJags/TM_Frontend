import { Component, OnInit } from '@angular/core';
import { Person } from '../Model/Person';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { ActivatedRoute, ParamMap } from '@angular/router';
import { BackendServiceService } from '../backend-service.service';
import { HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-displayPerson',
  templateUrl: './displayPerson.component.html',
  styleUrls: ['./displayPerson.component.css'],
})
export class DisplayPersonComponent implements OnInit {
  public person: Person = {};

  constructor(
    public service: BackendServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((id) => {
      this.service.getPerson(id['id']).subscribe((res) => (this.person = res));
    });
  }
}
