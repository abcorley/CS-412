import { Component, OnInit } from '@angular/core';
import {CONTACT} from '../models/contactModel';
//import { CONTACTS} from '../CONTACTS-MOCK';
import { ContactServiceAsyncService} from '../services/contact-service-async.service';

@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css']
})
export class CreateContactComponent implements OnInit {

 // contacts: CONTACT[] = CONTACTS;
  my: any = {
    name: '',
    department: '',
    UID: ''
}

  addContact( ): void {
    const newContact: CONTACT = {
      name:       this.my.name,
      department: this.my.department,
      UID:        this.my.UID,
      _id:        'bogus'
    };
//    this.contacts.push(newContact);
    this.contactService.addContact(newContact)
      .subscribe();
  }

  constructor(private contactService: ContactServiceAsyncService) { }

  ngOnInit() {
  }

}
