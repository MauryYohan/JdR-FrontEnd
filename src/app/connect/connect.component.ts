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
      'login': ['',
        Validators.compose([
          Validators.required])],
      'password': ['',
        Validators.compose([
          Validators.required])]
    });
  }

  submitForm(){
    this.formSubmitted = true;
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.us.getOne(this.loginForm.controls['login'].value).subscribe(
        utilisateurFromDb => {
          console.log(utilisateurFromDb);
        })
    }
  }

}
