import { Component, OnInit } from '@angular/core';
import {JoueurService} from '../joueur.service';
import {PartieService} from '../partie.service';
import {ActivatedRoute} from "@angular/router";
import {SessionStorageService} from 'ngx-webstorage';
import {Router} from '@angular/router';

@Component({
  selector: 'app-salle-attente',
  templateUrl: './salle-attente.component.html',
  styleUrls: ['./salle-attente.component.css']
})
export class SalleAttenteComponent implements OnInit {


  joueur;
  joueurId
  constructor(private joueurService: JoueurService, private partieService: PartieService, private route: ActivatedRoute, private sessionStorage:SessionStorageService, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => {
        this.joueurId = params['id'];
      });
    this.joueurService.getOne(this.joueurId).subscribe(pp => {
      this.joueur = pp;
      console.log(this.joueur);
    });


  }
  partieRoute(key){
    let idS = '/partie/'+key;
    this.router.navigate([idS]);
  }

}
