import {Component, Input, OnInit} from '@angular/core';
import {PersonnageService} from '../personnage.service';
import {Personnage} from '../personnage';

@Component({
  selector: 'app-list-personnage',
  templateUrl: './list-personnage.component.html',
  styleUrls: ['./list-personnage.component.css']
})
export class ListPersonnageComponent implements OnInit {

  personnageList;
  @Input() perso;

  constructor(private ps: PersonnageService) { }

  ngOnInit() {
    this.getList(this.perso);
  }

  showGrowlMessage(event) {
    this.getList(this.perso);
  }

  getList(perso: string) {
    this.ps.list().subscribe(
      listDesPersonnages => {
        this.personnageList = listDesPersonnages;
      });
  }
}
