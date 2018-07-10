import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PersonnageService} from '../personnage.service';
import {PartieService} from '../partie.service';
import {SessionStorageService} from 'ngx-webstorage';
import {UtilisateurService} from '../utilisateur.service';

@Component({
  selector: 'app-partie',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.css']
})
export class PartieComponent implements OnInit {
  idPerso;
  idPartie;
  personnage;
  personnages
  partie;
  joueur;
  constructor(private personnageService: PersonnageService, private route: ActivatedRoute, private partieService:PartieService, private utilsateurService: UtilisateurService, private session: SessionStorageService) { }

  ngOnInit() {

    this.route.params.subscribe(
      params => {
       this.idPartie = params['id'];
      })
    this.partieService.getOne(this.idPartie).subscribe(pp => {
        this.partie = pp;
        sessionStorage.setItem('id_partie',this.partie.id);
        this.personnageService.list().subscribe( personnages => {
          this.personnages = personnages;

          for(let pers of personnages) {

            if(pers.partie.id == sessionStorage.getItem('id_partie') && pers.utilisateurs.id == sessionStorage.getItem('idUtil') )
            {

              this.personnage = pers;
            }
          }

        });

      },
      () => {
        console.log('error');
      },
      () => {
        console.log('complete');
      });
    this.partieService.list().subscribe(leList => {
    });

  }

}
