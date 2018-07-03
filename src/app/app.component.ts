import { Component, OnInit, Inject } from '@angular/core';
import { UtilisateurService} from "./utilisateur.service";
import { Utilisateur} from "./utilisateur";
import {SessionStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  utilisateur: Utilisateur;
  constructor(private _sessionStorage:SessionStorageService,
              private userService: UtilisateurService){};


  setSessionStorage(key, value){
    this._sessionStorage.store(key, value);
  }
  getSessionStorage(key){
    return this._sessionStorage.retrieve(key);
  }
}
