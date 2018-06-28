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
  utilisateurform: FormGroup ;
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
    this.utilisateurform = this.fb.group({
      'id': {value: this.utilisateur.id},
      'mail': [{value: this.utilisateur.mail}, Validators.compose([Validators.required])],
      'login': [{value: this.utilisateur.login}, Validators.compose([Validators.required])],
      'motDePasse': [{value: this.utilisateur.motDePasse}, Validators.compose([Validators.required])],
      'avatar': [{value: this.utilisateur.avatar}, [Validators.compose([Validators.required])]],
      'pseudo': [{value: this.utilisateur.pseudo}, [Validators.compose([Validators.required])]]
    });
  }

}
