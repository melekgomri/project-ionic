import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})

export class ContactPage {
  contactData = {
    name: '',
    lastname: '',
    numtelephone: '',
    email: ''
  };

  constructor(private contactService: ContactService) {}

  addContact() {
    this.contactService.addContact(this.contactData).subscribe(
      (response) => {
        console.log('Contact added:', response);
        // Handle success (e.g., show success message)
      },
      (error) => {
        console.log('Error adding contact:', error);
        // Handle error (e.g., show error message)
      }
    );
  }
}

