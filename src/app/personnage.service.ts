import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Personnage} from './personnage';
import {Partie} from './partie';

@Injectable()
export class PersonnageService {

  baseUrl = 'http://localhost:8090/jdr/personnages/';

  constructor(private http: HttpClient) { }

  list(): Observable<any>{
    return this.http.get(this.baseUrl);
  }
  getOne(id:number): Observable<any>{
    return this.http.get(this.baseUrl+'/'+id);
  }
  delete(id:number): Observable<any>{
    return this.http.delete(this.baseUrl+'/'+id);
  }
  add(personnage: Personnage): Observable<any>{
    return this.http.post(this.baseUrl, personnage);
  }
  update(personnage: Personnage): Observable<any>{
    return this.http.put(this.baseUrl, personnage);
  }
}
