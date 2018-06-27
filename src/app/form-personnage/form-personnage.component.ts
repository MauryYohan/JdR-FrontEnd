import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Personnage} from '../personnage';
import {Router} from '@angular/router';
import {PersonnageService} from '../personnage.service';

@Component({
  selector: 'app-form-personnage',
  templateUrl: './form-personnage.component.html',
  styleUrls: ['./form-personnage.component.css']
})
export class FormPersonnageComponent implements OnInit {

  @Input() personnage: Personnage;
  personnageform: FormGroup ;
  formSubmitted = false;
  formtitle='Add';

  constructor(private fb: FormBuilder, private router: Router, private ps: PersonnageService) { }
  @Output() output = new EventEmitter();

  ngOnInit() {
    if(!this.personnage) { // si le formulaire contient un incident vide,
      this.personnage = new Personnage();
      this.formtitle = 'Add';
    }
    console.log(this.personnage)
    this.personnageform = this.fb.group({
      'id': [this.personnage.id],
      'nom': [this.personnage.nom, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
      'class': [this.personnage.classe, Validators.compose([Validators.required])],
      'pv': [this.personnage.pv, Validators.compose([Validators.required, Validators.min(1)])],
      'puissance': [this.personnage.puissance, [Validators.compose([Validators.required, Validators.min(1), Validators.max(5)])]],
      'defense': [this.personnage.defense, [Validators.compose([Validators.required, Validators.min(1), Validators.max(5)])]],
      'esprit': [this.personnage.esprit, [Validators.compose([Validators.required, Validators.min(1), Validators.max(5)])]],
      'intelligence': [this.personnage.intelligence, [Validators.compose([Validators.required, Validators.min(1), Validators.max(5)])]],
      'init': [this.personnage.init, [Validators.compose([Validators.required, Validators.min(1), Validators.max(5)])]],
      'equipement': [this.personnage.equipement],
      'inventaire': [this.personnage.inventaire],
      'background': [this.personnage.background],
      'race': [this.personnage.race, [Validators.compose([Validators.required])]],
      'sexe': [this.personnage.sexe, [Validators.compose([Validators.required])]]
    });
  }

  onSubmit(){
    this.formSubmitted = true;
    if(this.personnageform.valid) {
      this.ps.add(this.personnageform.value).subscribe(
        personnageFromDb => console.log(personnageFromDb));
      this.router.navigate(['/creatPerso']);
    }
  }
}
