import { Component, OnInit } from '@angular/core';
import {UtilisateurService} from '../utilisateur.service';

@Component({
  selector: 'app-utilisateur-list',
  templateUrl: './utilisateur-list.component.html',
  styleUrls: ['./utilisateur-list.component.css']
})
export class UtilisateurListComponent implements OnInit {

  utilisateurList;

  constructor(private utilisateurService : UtilisateurService) { }

  ngOnInit() {
    this.utilisateurService.list().subscribe(
      listDesUtilisateurs => this.utilisateurList = listDesUtilisateurs
    )
    this.utilisateurService.getOne(1).subscribe(
      listDesUtilisateurs => this.utilisateurList = listDesUtilisateurs
    )
  }

}
