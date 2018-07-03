import { Component, OnInit } from '@angular/core';
import {PartieService} from '../partie.service';
import {ActivatedRoute} from "@angular/router";
import {SessionStorageService} from 'ngx-webstorage';
import {Router} from '@angular/router';
import {UtilisateurService} from '../utilisateur.service';

@Component({
  selector: 'app-salle-attente',
  templateUrl: './salle-attente.component.html',
  styleUrls: ['./salle-attente.component.css']
})
export class SalleAttenteComponent implements OnInit {


  joueur;
  joueurId;
  constructor(private utilisateurService: UtilisateurService,
              private partieService: PartieService,
              private route: ActivatedRoute,
              private sessionStorage:SessionStorageService,
              private router: Router) { }

  ngOnInit() {
    // On recupere l'id de l'utilisateur
    this.route.params.subscribe(
      params => {
        this.joueurId = params['id'];
      });
    this.utilisateurService.getOne(this.joueurId).subscribe(pp => {
      this.joueur = pp;
      console.log(this.joueur);
    });


  }
  partieRoute(key){
    let idS = '/partie/'+key;
    this.router.navigate([idS]);
  }

  editCompteRoute(key){
    let idS = '/formEditCompte/'+key;
    this.router.navigate([idS]);
  }

}
