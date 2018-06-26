import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-personnage',
  templateUrl: './personnage.component.html',
  styleUrls: ['./personnage.component.css']
})

export class PersonnageComponent implements OnInit {

  persoList;
  constructor(private modalService: NgbModal) {}

  closeResult: string;

  ngOnInit() {
    }
  openBackDropCustomClass(content) {
    this.modalService.open(content, {backdropClass: 'light-blue-backdrop'});

  }

}
