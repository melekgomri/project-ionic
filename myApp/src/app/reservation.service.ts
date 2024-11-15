import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private apiUrl = 'http://localhost:3000/reservation'; // Your Express backend URL

  constructor(private http: HttpClient) {}

 
  addreservation(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addreservation`, data);
  }

 
  getreservation(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getall`);
  }

 
  updatereservation(id: string, newdata: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update/${id}`, newdata);
  }


  deletereservation(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`);
  }

  getReservationByCovoitureurId(id: string): Observable<any>{
    return this.http.get(`${this.apiUrl}/covoitureur/${id}`)
  }

  getReservationsByPassagerId(id: string): Observable<any>{
    return this.http.get(`${this.apiUrl}/passager/${id}`)
  }

  cancelReservation(id: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/cancel-reservation/${id}`, {}); 
  
  }
  confirmReservation(id: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/confirm-reservation/${id}`, {}); 
  
  }

  annulationReservation(id: string): Observable<any> {
    return this.http.put(`${this.apiUrl}/annuler/${id}/resetStatus`, {});
  }
}
