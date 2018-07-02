import {Component, EventEmitter, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})

export class ConnectComponent implements OnInit {

  loginForm: FormGroup;
  errorMessage: string;
  formSubmitted = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.loginForm = this.fb.group({
      // Declarer nos elements de formulaire
      'email': ['',
        [Validators.required, Validators.email]],
      'password': ['',
        [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
    });
  }

  submitForm() {
    this.formSubmitted = true;
    // Si l'ensemble des champs sont remplie
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
    this.authService.signInUser(email, password).then(
      () => {
        this.router.navigate(['/salle-attente', ':id']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );

  }

}
