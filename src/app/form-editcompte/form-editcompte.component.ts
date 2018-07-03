import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Utilisateur} from '../utilisateur';
import {ActivatedRoute, Router} from '@angular/router';
import {UtilisateurService} from '../utilisateur.service';

@Component({
  selector: 'app-form-editcompte',
  templateUrl: './form-editcompte.component.html',
  styleUrls: ['./form-editcompte.component.css']
})
export class FormEditcompteComponent implements OnInit {

  @Input() utilisateur: Utilisateur;
  editCompteForm: FormGroup;
  formSubmitted = false;
  formtitle = 'ModifieCompte'
  display: boolean = false;

  joueur: Utilisateur;
  joueurId;

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private us: UtilisateurService) { }

  @Output() output = new EventEmitter();

  ngOnInit() {
    // On recupere l'id de l'utilisateur
    this.route.params.subscribe(
      params => {
        this.joueurId = params['id'];
      });
    this.us.getOne(this.joueurId).subscribe(pp => {
      this.joueur = pp;
      console.log("C'est mon JOUEUR : ")
      console.log(this.joueur);
      console.log(this.joueur.id);
      console.log(this.joueur.mail);
      console.log(this.joueur.pseudo);
      console.log(this.joueur.motDePasse);

      this.editCompteForm = this.fb.group({
        'id': [this.joueur.id],
        'mail': [this.joueur.mail, Validators.compose([Validators.required, Validators.email])],
        'motDePasse': [this.joueur.motDePasse, Validators.compose([Validators.required, Validators.minLength(6)])],
        'pseudo': [this.joueur.pseudo, [Validators.compose([Validators.required])]],
        'estMj': [this.joueur.estMj = false],
        'avatar': [this.joueur.avatar],
      });

    });
  }

  onSubmit(){
    console.log("submit");
    this.formSubmitted = true;
    if (this.editCompteForm.valid) {
      console.log("valide");
      console.log(this.editCompteForm.value);
      console.log(this.joueur);

      if(this.editCompteForm.controls['id'].value>0){
        this.us.update(this.editCompteForm.value).subscribe(
          utilisateur=>{
            this.output.emit({'sev':'success', 'sum':'Update successfull!', 'detail': 'Joueur mis à jour:'+utilisateur.id});
          })
      }else{
        console.log(this.editCompteForm.value)
        this.us.add(this.editCompteForm.value).subscribe(utilisateur=>{
          console.log(utilisateur);
          this.output.emit({'sev':'success', 'sum':'Add successfull!', 'detail': 'Joueur ajouté:'+utilisateur.id

          });
        })
      }

      this.hideDialog(this.joueur.id);
    }
  };

  hideDialog(key) {
    this.display = false;
    let idS = '/salle-attente/'+key;
    this.router.navigate([idS]);
  }

  salleAttenteRoute(key){
    let idS = '/salle-attente/'+key;
    this.router.navigate([idS]);
  }

}
