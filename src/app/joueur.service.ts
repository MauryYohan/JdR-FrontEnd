import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Joueur} from './joueur';

@Injectable()
export class JoueurService {

  baseUrl: string = "http://localhost:8090/jdr/joueurs";
  constructor(private http: HttpClient){}

  list(): Observable<any>{
    return this.http.get(this.baseUrl);
  }
  getOne(id:number): Observable<any>{
    return this.http.get(this.baseUrl+'/'+id);
  }
  delete(id:number): Observable<any>{
    return this.http.delete(this.baseUrl+'/'+id);
  }
  add(joueur: Joueur): Observable<any>{
    return this.http.post(this.baseUrl, joueur);
  }
  update(joueur: Joueur): Observable<any>{
    return this.http.put(this.baseUrl, joueur);
  }
}
