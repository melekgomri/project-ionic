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
}
