import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PersonnageService} from '../personnage.service';
import {PartieService} from '../partie.service';
import {JoueurService} from '../joueur.service';
import {SessionStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-partie',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.css']
})
export class PartieComponent implements OnInit {
  idPerso;
  idPartie;
  personnage;
  partie;
  joueur;
  constructor(private personnageService: PersonnageService, private route: ActivatedRoute, private partieService:PartieService, private joueurService: JoueurService, private session: SessionStorageService) { }

  ngOnInit() {

    this.route.params.subscribe(
      params => {
       this.idPartie = params['id'];
      })
    this.partieService.getOne(this.idPartie).subscribe(pp => {
        this.partie = pp;
        console.log(this.partie);
        let joueurId = this.session.retrieve('id');
        this.joueurService.getOne(joueurId).subscribe( joueur => {
          this.joueur = joueur;
          console.log(this.joueur);

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
