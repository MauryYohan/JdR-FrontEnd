import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Utilisateur} from './utilisateur';

@Injectable()
export class UtilisateurService {

  baseUrl = 'http://localhost:8090/jdr/utilisateurs/';
  newUrl = '';

  constructor(private http: HttpClient) { }

  list(): Observable<Array<Utilisateur>> {
    return this.http.get<Array<Utilisateur>>(this.baseUrl);
  }

  getOne(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(this.baseUrl + "/id/" + id);
  }

  getOneByMail(email: string):Observable<Utilisateur> {
    return this.http.get<Utilisateur>(this.baseUrl + email);
  }

  getOneByPseudo(pseudo: string):Observable<Utilisateur> {
    return this.http.get<Utilisateur>(this.baseUrl + "/pseudo/" + pseudo);
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

  getOneByPseudoAndPsw(pseudo: string, pass: string): Observable<Utilisateur>  {
    try{
      return this.http.get<Utilisateur>(this.baseUrl + "pseudo/" + pseudo + "/mdp/"+pass);
    } catch(e) {
      console.log("ERREUR-->",e);
      throw(e);
    }
  }


}
