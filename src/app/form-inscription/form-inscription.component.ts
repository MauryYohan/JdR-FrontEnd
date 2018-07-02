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
  formtitle = 'Inscript'
  display: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private us: UtilisateurService) { }
  @Output() output = new EventEmitter();

  ngOnInit() {
    if (!this.utilisateur) {
      this.utilisateur = new Utilisateur();
      this.formtitle = 'AddInscription';
    }
    this.inscriptionform = this.fb.group({
      'id': [this.utilisateur.id],
      'mail': [this.utilisateur.mail, Validators.compose([Validators.required, Validators.email])],
      'motDePasse': [this.utilisateur.motDePasse, Validators.compose([Validators.required, Validators.minLength(6)])],
      'pseudo': [this.utilisateur.pseudo, [Validators.compose([Validators.required])]]
    });
  }
  onSubmit() {
    console.log("submit");
    this.formSubmitted = true;
    if (this.inscriptionform.valid) {
      console.log("valide");
      console.log(this.inscriptionform.value);
        this.us.add(this.inscriptionform.value).subscribe(utilisateur => {
        console.log(utilisateur);
          this.output.emit({'sev':'success', 'sum':'Add successfull!', 'detail': 'Inscription ajoutée:' + utilisateur.id

          });
       })
      this.hideDialog();
    }
  }
  hideDialog() {
    this.display = false;
    this.router.navigate(['/connect']);
  }

}
