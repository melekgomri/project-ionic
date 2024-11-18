import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

 private apiurl='http://localhost:3000/utilisateur';
 constructor(private http: HttpClient){}

 getallutilisateur(): Observable<any> {
  return this.http.get(`${this.apiurl}/getall`);
}
deleteutilisateur(id: string): Observable<any> {
  return this.http.delete(`${this.apiurl}/delete/${id}`);
}

changePwd(id: string  ,newdata: any): Observable<any> {
  return this.http.put(`${this.apiurl}/change-password/${id}`, newdata);
}

allCarpoolers(): Observable<any> {
  return this.http.get(`${this.apiurl}/covoitureurs/all`);
}

getUserById(id: string): Observable<any> {
  return this.http.get(`${this.apiurl}/getbyid/${id}`);
}
}
