import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CONTACT} from '../models/contactModel';


@Injectable({
  providedIn: 'root'
})
export class ContactServiceAsyncService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  contactsEndpoint = 'http://localhost:3000/api/db';

  getContacts(): Observable<CONTACT[]> {
    return this.httpClient.get<CONTACT[]>(this.contactsEndpoint);
  }

  addContact(newContact: CONTACT): Observable<any> {
    // We don't need the '_id' property on the back end (probly should fix it there)
    delete newContact._id;
    return this.httpClient.post(this.contactsEndpoint, newContact, this.httpOptions);

  }

  constructor(private httpClient: HttpClient) { }
}
