import { Component } from '@angular/core';
import {SessionStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _sessionStorage:SessionStorageService){}

  setSessionStorage(key, value){
    this._sessionStorage.store(key, value);
  }
  getSessionStorage(key){
    return this._sessionStorage.retrieve(key);
  }
}
