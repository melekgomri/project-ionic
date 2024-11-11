import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrajetService {

  private apiUrl = 'http://localhost:3000/trajet'; // Your Express backend URL

  constructor(private http: HttpClient) {}

  // Add new contact
  addtrajet(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addtrajet`, data);
  }

  // Get all contacts
  getAlltrajet(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getall`);
  }

  // Update contact
  updatetrajet(id: string, newdata: any): Observable<any> {
    return this.http.patch(`${this.apiUrl}/update/${id}`, newdata);
  }

  // Delete contact
  deletetrajet(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  getTrajetsByUserId(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/getall/${userId}`);
  }

  getTrajetsById(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/getbyid/${id}`);
  }
}
