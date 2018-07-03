import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UtilisateurService} from '../utilisateur.service';
import {Utilisateur} from '../utilisateur';
import {Router} from '@angular/router';
import {SessionStorageService} from 'ngx-webstorage';

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

  constructor(private fb: FormBuilder, private router: Router, private us: UtilisateurService, private sessionStorage:SessionStorageService) { }

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

      this.us.list().subscribe(utilis =>{
        console.log(utilis);
        for(let u of utilis){
          if(u.pseudo == this.loginForm.controls['pseudo'].value){
            if(u.motDePasse == this.loginForm.controls['password'].value){
              let idUtil = ''+u.id;
              sessionStorage.setItem('id_joueur', idUtil);
              sessionStorage.setItem('pseudo_joueur', u.pseudo);
              let idS = '/salle-attente/'+sessionStorage.getItem('id_joueur');
              this.router.navigate([idS]);
            }
          }
        }
      })

    }

  }

  static ifExist() {
    // noinspection JSAnnotator

  }

}
