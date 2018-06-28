import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Personnage} from './personnage';

@Injectable()
export class PersonnageService {

  baseUrl = 'http://localhost:8090/jdr/personnages';
  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  getOne(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '' + id);
  }

  add(personnage: Personnage): Observable<any> {

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.baseUrl, personnage,  {headers});
  }
  update(personnage: Personnage): Observable<any> {

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

<<<<<<< Updated upstream
    return this.http.put(this.baseUrl, personnage,  {headers});
=======
    return this.http.put(this.baseurl, personnage,  {headers});
>>>>>>> Stashed changes
  }
  delete(id: number ): Observable<any> {

    return this.http.delete(this.baseUrl + '' + id);
  }
}
