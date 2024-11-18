import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AvisService {
  private apiUrl = 'http://localhost:3000/avis'; 

  constructor(private http: HttpClient) { }
  submitReview(reviewData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/addavis`, reviewData);
  }
}
