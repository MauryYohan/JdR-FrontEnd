import {Component, Input, OnInit} from '@angular/core';
import {Personnage} from '../personnage';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PersonnageService} from '../personnage.service';



@Component({
  selector: 'app-fiche-personnage',
  templateUrl: './fiche-personnage.component.html',
  styleUrls: ['./fiche-personnage.component.css']
})
export class FichePersonnageComponent implements OnInit {


  @Input()personnage: Personnage;
  personnageform: FormGroup ;

  constructor(private fb: FormBuilder, private router: Router, private ps: PersonnageService, private personnageservice: PersonnageService, private route: ActivatedRoute) { }

  ngOnInit() {

        this.personnageform = this.fb.group({
          'id': [this.personnage.id],
          'nom': this.personnage.nom,
          'classe': [this.personnage.classe, Validators.compose([Validators.required])],
          'pv': [this.personnage.pv, Validators.compose([Validators.required, Validators.min(1)])],
          'puissance': [this.personnage.puissance, [Validators.compose([Validators.required, Validators.min(1), Validators.max(10)])]],
          'defense': [this.personnage.defense, [Validators.compose([Validators.required, Validators.min(1), Validators.max(10)])]],
          'esprit': [this.personnage.esprit, [Validators.compose([Validators.required, Validators.min(1), Validators.max(10)])]],
          'intelligence': [this.personnage.intelligence, [Validators.compose([Validators.required, Validators.min(1), Validators.max(10)])]],
          'init': [this.personnage.init, [Validators.compose([Validators.required, Validators.min(1), Validators.max(10)])]],
          'equipement': [this.personnage.equipement],
          'inventaire': [this.personnage.inventaire],
          'background': [this.personnage.background],
          'race': [this.personnage.race, [Validators.compose([Validators.required])]],
          'sexe': [this.personnage.sexe, [Validators.compose([Validators.required])]],
          //'id_joueur': ['']
        });
      }
}
