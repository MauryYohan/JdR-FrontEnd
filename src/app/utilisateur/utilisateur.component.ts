import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-utilisateur',
  templateUrl: './utilisateur.component.html',
  styleUrls: ['./utilisateur.component.css']
})
export class UtilisateurComponent implements OnInit {

  @Input() util;
  constructor() { }

  ngOnInit() {
  }

}
