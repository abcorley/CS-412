import { Component, OnInit, Input } from '@angular/core';

import {CONTACT} from '../models/contactModel';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  @Input() selectedContact: CONTACT | undefined;

  constructor() { }

  ngOnInit() {
  }

}
