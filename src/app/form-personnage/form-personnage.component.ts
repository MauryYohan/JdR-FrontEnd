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
  display: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private ps: PersonnageService) { }
  @Output() output = new EventEmitter();

  ngOnInit() {
    if(!this.personnage) { // si le formulaire contient un incident vide,
      this.personnage = new Personnage();
      this.formtitle = 'Add';
    }else{
      this.showDialog();
    }

    this.personnageform = this.fb.group({
      'id': [this.personnage.id],
      'nom': [this.personnage.nom, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(20)])],
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

  onSubmit(){
    console.log("submit");
    this.formSubmitted = true;
    if(this.personnageform.valid) {
      console.log("valide");
      if(this.personnageform.controls['id'].value>0){
        this.ps.update(this.personnageform.value).subscribe(
          personnage=>{
            this.output.emit({'sev':'success', 'sum':'Update successfull!', 'detail': 'Personnage mis à jour:'+personnage.id});
          })
      }else{
        console.log(this.personnageform.value)
        this.ps.add(this.personnageform.value).subscribe(personnage=>{
          console.log(personnage);
          this.output.emit({'sev':'success', 'sum':'Add successfull!', 'detail': 'Incident ajouté:'+personnage.id

          });
      })
      }
      this.hideDialog();
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
    hideDialog() {
      this.display = false;
      this.router.navigate(['/createPerso']);
    }

}
