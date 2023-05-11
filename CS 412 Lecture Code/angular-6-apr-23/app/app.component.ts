import { Component } from '@angular/core';
import {CONTACTS} from './mock/CONTACTS-MOCK'
import {CONTACT} from './models/contactModel';
//import { ContactServiceAsyncService} from './services/contact-service-async.service';
import {ContactService} from "./services/contact.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'CS412 Contacts';
  selectedContact: CONTACT | undefined;
  contacts : CONTACT[] | undefined;

  getContacts(): void {
    this.contactService.getContacts()
      .subscribe(contacts => {
        this.contacts = contacts;
        console.log(`Contacts: ${this.contacts}`)
      });
  }


  displayContactDetail(contact: CONTACT) {
    this.selectedContact = contact;
  }

  constructor(private contactService: ContactService) {

  }
  ngOnInit() {
    this.getContacts();
  }
}
