import { Component, OnInit } from '@angular/core';
import { ContactsModel } from './contacts.model';
import { ContactsService } from './contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  contacts: ContactsModel[] = [];
  _filter: string;
  _contacts: ContactsModel[] = [];
  filteredContacts: ContactsModel[] = [];

  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
    this.returnAll();
  }

  returnAll(): void {
    this.contactsService.returnAll().subscribe({
      next: (contacts) => {
        this._contacts = contacts;
        this.filteredContacts = this._contacts;
      },
      error: (e) => {
        console.log('Error in returnAll', e);
      },
      complete() {
        console.log('Done');
      },
    });
  }

  set filter(value: string) {
    this._filter = value;
    this.filteredContacts = this._contacts.filter(
      (contact: ContactsModel) =>
        contact.name
          .toLocaleLowerCase()
          .indexOf(this._filter.toLocaleLowerCase()) > -1
    );
  }

  get filter(): string {
    return this._filter;
  }
}
