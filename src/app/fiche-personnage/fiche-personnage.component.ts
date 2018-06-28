import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Personnage} from '../personnage';
import {Router} from '@angular/router';
import {PersonnageService} from '../personnage.service';
import {Utilisateur} from '../utilisateur';

@Component({
  selector: 'app-fiche-personnage',
  templateUrl: './fiche-personnage.component.html',
  styleUrls: ['./fiche-personnage.component.css']
})
export class FichePersonnageComponent implements OnInit {

  @Input() personnage: Personnage;
  personnageform: FormGroup ;
  formSubmitted = false;
  formtitle='Add';
  display: boolean = false;
  utilisateur : Utilisateur

  constructor(private fb: FormBuilder, private router: Router, private ps: PersonnageService) { }
  @Output() output = new EventEmitter();

  ngOnInit() {

    this.personnageform = this.fb.group({
      'id': [this.utilisateur.id],
      'nom': [this.personnage.nom],
      'classe': [this.personnage.classe],
      'pv': [this.personnage.pv],
      'puissance': [this.personnage.puissance, [Validators.compose([Validators.required, Validators.min(1), Validators.max(10)])]],
      'defense': [this.personnage.defense],
      'esprit': [this.personnage.esprit],
      'intelligence': [this.personnage.intelligence],
      'init': [this.personnage.init],
      'equipement': [this.personnage.equipement],
      'inventaire': [this.personnage.inventaire],
      'background': [this.personnage.background],
      'race': [this.personnage.race],
      'sexe': [this.personnage.sexe],
      //'id_joueur': ['']
    });
  }

  onSubmit(){
    this.formSubmitted = true;
    if(this.personnageform.valid) {
      if(this.personnageform.controls['id'].value>0){
        this.ps.update(this.personnageform.value).subscribe(
          personnage=>{
            this.output.emit({'sev':'success', 'sum':'Update successfull!', 'detail': 'Personnage mis à jour:'+personnage.id});
          })
      }
    }
  }

  showAddDialog(){
    this.formtitle='Add';
    this.personnage = new Personnage();
    this.showDialog();
  }

  showDialog() {
    this.formSubmitted = false;
    this.display = true;
    console.log(this.personnage);
  }


}
