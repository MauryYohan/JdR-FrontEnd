import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.css']
})
export class ConnectComponent implements OnInit {

  incidentForm: FormGroup;
  formSubmitted = false;

  constructor() { }

  ngOnInit() {
  }

}
