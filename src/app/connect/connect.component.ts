import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UtilisateurService} from '../utilisateur.service';
import {Utilisateur} from '../utilisateur';
import {Router} from '@angular/router';
import {SessionStorageService} from 'ngx-webstorage';
import {utils} from 'protractor';
@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})

export class ConnectComponent implements OnInit {

  @Input() utilisateur: Utilisateur;

  error: string[] = [];

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

    this.error.splice(0,this.error.length);
    this.formSubmitted = true;
    // Si l'ensemble des champs sont remplie
    if  (this.loginForm.valid) {
      this.us.getOneByPseudoAndPsw(this.loginForm.controls['pseudo'].value, this.loginForm.controls['password'].value).subscribe(
        utilis =>{
          console.log('USER FOUNDED YEAHHH', utilis );
          let Idu = ''+utilis.id;
          let Nom = ''+utilis.pseudo;
          sessionStorage.setItem('idUtil', Idu);
          sessionStorage.setItem('nomJoueur', Nom);
          let idS = '/salle-attente/'+sessionStorage.getItem('idUtil');
          this.router.navigate([idS]);
        },err => {
          this.error.push('login and pass not correct')
        } ,
        () => {


        });
    }



}
