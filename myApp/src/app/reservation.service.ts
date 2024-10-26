import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl = 'http://localhost:3000/reservation'; // Your Express backend URL

  constructor(private http: HttpClient) {}

  // Add new contact
  addreservation(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addreservation`, data);
  }

  // Get all contacts
  getreservation(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getall`);
  }

  // Update contact
  updatereservation(id: string, newdata: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, newdata);
  }

  // Delete contact
  deletereservation(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  getReservationByCovoitureurId(id: string): Observable<any>{
    return this.http.get(`${this.apiUrl}/covoitureur/${id}`)
  }
}
