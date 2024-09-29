import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private apiUrl = 'http://localhost:3000/contact'; // Your Express backend URL

  constructor(private http: HttpClient) {}

  // Add new contact
  addContact(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addcontact`, data);
  }

  // Get all contacts
  getAllContacts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getall`);
  }

  // Update contact
  updateContact(id: string, newdata: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, newdata);
  }

  // Delete contact
  deleteContact(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }
}
