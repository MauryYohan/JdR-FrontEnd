import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UtilisateurService} from '../utilisateur.service';
import {Utilisateur} from '../utilisateur';
import {Router} from '@angular/router';
import {UtilisateurListComponent} from '../utilisateur-list/utilisateur-list.component';
import {User} from 'firebase';
@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})

export class ConnectComponent implements OnInit {

  @Input() utilisateur: Utilisateur;

  loginForm: FormGroup;
  formSubmitted = false;

  @Output() output = new EventEmitter();

  constructor(private fb: FormBuilder, private router: Router, private us: UtilisateurService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      // Declarer nos elements de formulaire
      'pseudo': ['',
        Validators.compose([
          Validators.required])],
      'password': ['',
        Validators.compose([
          Validators.required])]
    });
  }

  submitForm() {
    this.formSubmitted = true;
    // Si l'ensemble des champs sont remplie
    if  (this.loginForm.valid) {
      console.log(this.loginForm.controls['pseudo'].value);
      console.log(this.loginForm.controls['password'].value);
      console.log(this.us.getOneByMail(this.loginForm.controls['pseudo'].value));

      this.us.getOneByPseudo(this.loginForm.controls['pseudo'].value).subscribe(
        utilisateurFromDb => {
          console.log(utilisateurFromDb);
          if (utilisateurFromDb.pseudo == this.loginForm.controls['pseudo'].value && utilisateurFromDb.motDePasse == this.loginForm.controls['password'].value) {
            console.log("ok")
          }
        } );
    }

  }

  static ifExist() {
    // noinspection JSAnnotator
    list: Array<Utilisateur> 

  }

}
