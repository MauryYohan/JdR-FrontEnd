import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Personnage} from '../personnage';

@Component({
  selector: 'app-form-personnage',
  templateUrl: './form-personnage.component.html',
  styleUrls: ['./form-personnage.component.css']
})
export class FormPersonnageComponent implements OnInit {

  @Input() personnage: Personnage;
  personnageform: FormGroup ;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  this.personnageform = this.fb.group({
    'id': [this.personnage.id],
    'nom': [{value: this.personnage.nom}, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
    'class': [{value: this.personnage.classe}, Validators.compose([Validators.required])],
    'pv': [{value: this.personnage.pv}, Validators.compose([Validators.required, Validators.minLength(20)])],
    'puissance': [{value: this.personnage.puissance}, [Validators.compose([Validators.required, Validators.min(1), Validators.max(5)])]],
    'defense': [{value: this.personnage.defense}, [Validators.compose([Validators.required, Validators.min(1), Validators.max(5)])]],
    'esprit': [{value : this.personnage.esprit}, [Validators.compose([Validators.required, Validators.min(1), Validators.max(5)])]],
'intelligence': [{value : this.personnage.intelligence}, [Validators.compose([Validators.required, Validators.min(1), Validators.max(5)])]],
    'init': [{value : this.personnage.init}, [Validators.compose([Validators.required, Validators.min(1), Validators.max(5)])]],
    'equipement': [{value : this.personnage.equipement}],
    'inventaire': [{value : this.personnage.inventaire}],
    'background': [{value : this.personnage.background}],
    'race': [{value : this.personnage.race}, [Validators.compose([Validators.required])]],
    'sexe': [{value : this.personnage.sexe}, [Validators.compose([Validators.required])]]
    });
  }
}
