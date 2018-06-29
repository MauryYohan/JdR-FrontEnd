import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-des',
  templateUrl: './des.component.html',
  styleUrls: ['./des.component.css']
})
export class DesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(this.randomD(6));
  }

  randomD(number){
  Math.floor((Math.random() * number) + 1);
  }


}
