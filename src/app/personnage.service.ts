import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Personnage} from './personnage';

@Injectable()
export class PersonnageService {

  baseurl = 'http://localhost:8090/jdr/personnages';
  constructor(private http: HttpClient) { }

  list(): Observable<any> {
    return this.http.get(this.baseurl);
  }

  getOne(id: number): Observable<any> {
    return this.http.get(this.baseurl + '' + id);
  }

  add(personnage: Personnage): Observable<any>{

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.baseurl, personnage,  {headers});
  }
  update(personnage: Personnage): Observable<any>{

    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put(this.baseurl, personnage,  {headers})
  }
  delete(id: number ): Observable<any>{

    return this.http.delete(this.baseurl + '' + id);
  }


}
