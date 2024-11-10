import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiurl = 'http://localhost:3000/utilisateur';

  constructor(private http: HttpClient) { }

  register(data: any): Observable<any> {
    return this.http.post(`${this.apiurl}/register`, data); // Fixed the quote mark here
  }

  login(data: any): Observable<any> {
    return this.http.post(`${this.apiurl}/login`, data); // Assure-toi que l'URL est correcte
  }
  getUserById(id: string): Observable<any> {
    return this.http.get(`${this.apiurl}/getbyid/${id}`);
  }
  updateUserProfile(id: string, updatedData: any): Observable<any> {
    return this.http.put(`${this.apiurl}/update/${id}`, updatedData);
  }  
  
}
