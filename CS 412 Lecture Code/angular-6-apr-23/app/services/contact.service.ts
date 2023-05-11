import { Injectable } from '@angular/core';
import {CONTACT} from '../models/contactModel';
import {CONTACTS} from '../mock/CONTACTS-MOCK';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactsEndpoint = 'http://localhost:3000/api';
  useLocalContacts : boolean = true;//uncomment to use local contacts
  contacts = CONTACTS;
  getContacts(): Observable<CONTACT[]> {
    if (!this.useLocalContacts) {
    return this.httpClient.get<CONTACT[]>(this.contactsEndpoint); }
    else {
      return of(this.contacts);
    }
  }

  addContact(newContact: CONTACT): any {

     return this.httpClient.post<any>(this.contactsEndpoint, newContact);

  }

  constructor(private httpClient: HttpClient) { }
}
