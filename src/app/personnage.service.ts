import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Utilisateur} from './utilisateur';

@Injectable()
export class PersonnageService {

  baseUrl = 'http://localhost:8090/jdr/personnages/';
  newUrl = '';
  constructor(private http: HttpClient) { }

  list(): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(this.baseUrl);
  }

  getOne(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(this.baseUrl + id);
  }

  getIdByPseudo(login: string): Observable<Utilisateur> {
    this.newUrl = this.baseUrl + login;
    return this.http.get<Utilisateur>(this.newUrl);
  }

  remove(id: number): Observable<Utilisateur> {
    return this.http.delete<Utilisateur>(this.baseUrl + id);
  }

  add(utilisateur: Utilisateur): Observable<any> {
    return this.http.post(this.baseUrl, utilisateur);
  }
  update(utilisateur: Utilisateur): Observable<any> {
    return this.http.put(this.baseUrl, utilisateur);
  }
  del(id: number): Observable<any> {
    return this.http.delete(this.baseUrl + id);
  }
}
