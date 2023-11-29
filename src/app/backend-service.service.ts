import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from './Model/Person';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable()
export class BackendServiceService {
  private URL_t = 'http://localhost:8080/api/tm';
  constructor(private http: HttpClient) {}
  saveData(data: any) {
    this.http
      .post<any>(this.URL_t, data)
      .subscribe(() => console.log('saved ... '));
  }

  getPerson(id: any): Observable<Person> {
    const url = `${this.URL_t}/${id}`;
    return this.http.get<Person>(url).pipe();
  }

  getAll(): Observable<Person[]> {
    console.log('fetching data ... ');
    return this.http.get<Person[]>(this.URL_t);
  }
}
