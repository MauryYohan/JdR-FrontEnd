import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-des',
  templateUrl: './des.component.html',
  styleUrls: ['./des.component.css']
})
export class DesComponent implements OnInit {

  nb:number = 0;

  constructor() { }

  ngOnInit() {
    console.log(this.randomD(6));
  }

  randomD(number){
  this.nb = Math.floor((Math.random() * number) + 1);
  }


}
