import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utilisateur} from './utilisateur';

@Injectable()
export class UtilisateurService {

  baseUrl = 'http://localhost:8090/jdr/utilisateurs';
  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getOne(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '' + id);
  }

  add(utilisateur: Utilisateur): Observable<any>{

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.baseUrl, utilisateur,  {headers});
  }
  update(utilisateur: Utilisateur): Observable<any>{

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put(this.baseUrl, utilisateur,  {headers})
  }
  delete(id: number ): Observable<any>{

    return this.http.delete(this.baseUrl + '' + id);
  }
}
