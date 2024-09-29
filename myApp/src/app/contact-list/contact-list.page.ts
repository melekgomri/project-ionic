import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.page.html',
  styleUrls: ['./contact-list.page.scss'],
})
export class ContactListPage implements OnInit {
contacts: any[]=[];
  constructor(private  contactService: ContactService) { }

  ngOnInit() {
    this.getallcontacts();
  }
  getallcontacts(){
  this.contactService.getAllContacts().subscribe(
    (data)=>{
   this.contacts=data;
   console.log('contacts',this.contacts);
    },
    (error)=>{
      console.log('error fetching contacts',error);
    }
  );
  }
deletecontact(id: string){
  this.contactService.deleteContact(id).subscribe(
    (response)=>{
      console.log('Contact deleted',response);
      this.getallcontacts(); //refrechirr
    },
    (error)=>{
      console.log('error deleting contact',error);
    }
  );
}
updateContact(id: string, newData: any) {
  this.contactService.updateContact(id, newData).subscribe(
    (response) => {
      console.log('Contact updated:', response);
      this.getallcontacts(); // Rafraîchir la liste après mise à jour
    },
    (error) => {
      console.log('Error updating contact:', error);
    }
  );
}



}
