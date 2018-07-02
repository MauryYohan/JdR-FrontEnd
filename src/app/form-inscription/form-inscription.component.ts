import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Utilisateur} from '../utilisateur';
import {Router} from '@angular/router';
import {UtilisateurService} from '../utilisateur.service';
<<<<<<< HEAD
import {Personnage} from '../personnage';
import {AuthService} from '../auth.service';
=======
>>>>>>> master

@Component({
  selector: 'app-form-inscription',
  templateUrl: './form-inscription.component.html',
  styleUrls: ['./form-inscription.component.css']
})
export class FormInscriptionComponent implements OnInit {

  @Input() utilisateur: Utilisateur;
  inscriptionform: FormGroup;
  errorMessage: string;
  formSubmitted = false;
  formtitle = 'Inscription';
  display: boolean = false;

  constructor(private fb: FormBuilder,
              private router: Router,
              private us: UtilisateurService,
              private authService: AuthService) { }

  @Output() output = new EventEmitter();

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    if (!this.utilisateur) {
      this.utilisateur = new Utilisateur();
      console.log((this.utilisateur));
      this.formtitle = 'AddInscription';
    }
    this.inscriptionform = this.fb.group({
      'id': [this.utilisateur.id],
      'email': [this.utilisateur.mail, Validators.compose([Validators.required, Validators.email])],
      'password': ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
      'pseudo': [this.utilisateur.pseudo, [Validators.compose([Validators.required])]]
    });
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.inscriptionform.valid) {
<<<<<<< HEAD
      const email = this.inscriptionform.get('email').value;
      const password = this.inscriptionform.get('password').value;
      console.log("submit");
      console.log(email);
      console.log(this.utilisateur.mail);
      console.log(this.utilisateur.avatar);
      console.log(this.utilisateur.motDePasse);
      console.log(this.utilisateur.uid);
      this.authService.createNewUser(email, password).then(
        () => {
          this.router.navigate(['/connect']);
        },
        (error) => {
          this.errorMessage = error;
        }
      );
      this.us.add(this.inscriptionform.value).subscribe(utilisateur => {
        this.output.emit({
          'sev': 'success', 'sum': 'Add successfull!', 'detail': 'Incident ajouté:' + utilisateur.id

        });
      })
=======
      console.log("valide");
      console.log(this.inscriptionform.value);
        this.us.add(this.inscriptionform.value).subscribe(utilisateur => {
        console.log(utilisateur);
          this.output.emit({'sev':'success', 'sum':'Add successfull!', 'detail': 'Inscription ajoutée:' + utilisateur.id

          });
       })
      this.hideDialog();
>>>>>>> master
    }
    //this.display = false;
  }

}
