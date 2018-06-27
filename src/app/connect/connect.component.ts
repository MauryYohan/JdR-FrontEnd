import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UtilisateurService} from '../utilisateur.service';
@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})

export class ConnectComponent implements OnInit {

  loginForm: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder, private us : UtilisateurService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      //Declarer nos elements de formulaire
      'dateCreation': ['',
        Validators.compose([
          Validators.required])],
      'description': ['',
        Validators.compose([
          Validators.required])],
      'email': ['',
        Validators.compose([
          Validators.required,
          Validators.min(10),
          Validators.max(1000)])],
      'isOpen': ['',
        Validators.compose([
          Validators.required])],
      'level': ['',
        Validators.compose([
          Validators.required])],
      'progress': ['',
        Validators.compose([
          Validators.required])],
      'titre': ['',
        Validators.compose([
          Validators.required])],
      'type': ['',
        Validators.compose([
          Validators.required])]
    });
  }

}
