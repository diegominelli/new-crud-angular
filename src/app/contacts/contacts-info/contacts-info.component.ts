import { ContactsService } from './../contact-list/contacts.service';
import { Component, OnInit, numberAttribute } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsModel } from '../contact-list/contacts.model';

@Component({
  selector: 'app-contacts-info',
  templateUrl: './contacts-info.component.html',
  styleUrls: ['./contacts-info.component.css'],
})
export class ContactsInfoComponent implements OnInit {
  contactId: number;
  contact: ContactsModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private contactService: ContactsService
  ) {}

  ngOnInit(): void {
    this.contactId = +this.activatedRoute.snapshot.params['id'];

    this.returnById();
  }

  returnById(): void {
    this.contactService.returnById(this.contactId).subscribe({
      next: (contact) => {
        this.contact = contact;
      },
      error: (e) => {
        console.log('Error in return By Id', e);
      },
    });
  }

  save(): void {
    this.contactService.save(this.contact);
  }
}
