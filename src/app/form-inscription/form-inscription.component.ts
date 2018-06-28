import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Utilisateur} from '../utilisateur';
import {Router} from '@angular/router';
import {UtilisateurService} from '../utilisateur.service';

@Component({
  selector: 'app-form-inscription',
  templateUrl: './form-inscription.component.html',
  styleUrls: ['./form-inscription.component.css']
})
export class FormInscriptionComponent implements OnInit {

  @Input() utilisateur: Utilisateur;
  inscriptionform: FormGroup ;
  formSubmitted = false;
  formtitle = 'Inscript';

  constructor(private fb: FormBuilder, private router: Router, private us: UtilisateurService) { }
  @Output() output = new EventEmitter();

  ngOnInit() {
    if (!this.utilisateur) { // si le formulaire contient un incident vide,
      this.utilisateur = new Utilisateur();
      this.formtitle = 'Inscript';
    }
    console.log(this.utilisateur)
    this.inscriptionform = this.fb.group({
      'id': [this.utilisateur.id],
      'mail': [this.utilisateur.mail, Validators.compose([Validators.required, Validators.email])],
      'motDePasse': [this.utilisateur.motDePasse, Validators.compose([Validators.required])],
      'pseudo': [this.utilisateur.pseudo, [Validators.compose([Validators.required])]]
    });
  }

}
