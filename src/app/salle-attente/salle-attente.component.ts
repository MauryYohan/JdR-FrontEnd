import { Component, OnInit } from '@angular/core';
import {JoueurService} from '../joueur.service';
import {PartieService} from '../partie.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-salle-attente',
  templateUrl: './salle-attente.component.html',
  styleUrls: ['./salle-attente.component.css']
})
export class SalleAttenteComponent implements OnInit {

  joueurList;
  joueur;
  partieList;
  constructor(private joueurService: JoueurService, private partieService: PartieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        if(params['id'])
          this.joueurService.getOne(params['id']).subscribe(joueur=> this.joueur = joueur);
        else {
          this.joueurService.list().subscribe(joueurs => this.joueurList = joueurs);
          this.partieService.list().subscribe(parties => this.partieList = parties);
        }
      })

  }

}
