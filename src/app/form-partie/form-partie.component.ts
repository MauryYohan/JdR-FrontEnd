import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Partie} from '../partie';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PartieService} from '../partie.service';

@Component({
  selector: 'app-form-partie',
  templateUrl: './form-partie.component.html',
  styleUrls: ['./form-partie.component.css']
})
export class FormPartieComponent implements OnInit {
  @Input() partie: Partie;
  partieform: FormGroup ;
  formSubmitted = false;
  formtitle = 'Partie';
  display: boolean = false;

  constructor(private fb: FormBuilder, private router: Router, private ps: PartieService) { }
  @Output() output = new EventEmitter();

  ngOnInit() {
    if (!this.partie) {
      this.partie = new Partie();
      this.formtitle = 'AddPartie';
    }
    this.partieform = this.fb.group({
      'id': [this.partie.id],
      'titre': [this.partie.titre],
      'description': [this.partie.description, Validators.compose([Validators.required])],
      'nbjoueurs': [this.partie.nbjoueurs, [Validators.compose([Validators.required, Validators.max(4)])]]
    });
  }
    onSubmit(){
      console.log("submit");
      this.formSubmitted = true;
      if (this.partieform.valid) {
        console.log("valide");
        console.log(this.partieform.value);
        this.ps.add(this.partieform.value).subscribe(partie => {
          console.log(partie);
          this.output.emit({'sev':'success', 'sum':'Add successfull!', 'detail': 'Partie ajoutée:' + partie.id

          });
        })
        this.hideDialog();
      }
    }
    hideDialog(){
      this.display = false;
      this.router.navigate(['/salle-attente/:id']);
    }
}
