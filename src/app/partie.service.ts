import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Partie} from './partie';
@Injectable()
export class PartieService {

  baseUrl: string = "http://localhost:8090/jdr/parties";


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
  add(partie: Partie): Observable<any>{
    return this.http.post(this.baseUrl, partie);
  }
  update(partie: Partie): Observable<any>{
    return this.http.put(this.baseUrl, partie);
  }
}
