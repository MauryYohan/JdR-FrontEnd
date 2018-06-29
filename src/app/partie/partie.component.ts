import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PersonnageService} from '../personnage.service';

@Component({
  selector: 'app-partie',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.css']
})
export class PartieComponent implements OnInit {
  idPerso;
  personnage;
  constructor(private personnageService: PersonnageService,private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(
      params => {
       this.idPerso = params['id'];
      })
    this.personnageService.getOne(this.idPerso).subscribe(pp => {
        this.personnage = pp;
      },
      () => {
        console.log('error');
      },
      () => {
        console.log('complete');
      });
    this.personnageService.list().subscribe(leList => {
    });

  }

}
