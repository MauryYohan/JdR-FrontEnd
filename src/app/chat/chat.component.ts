import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Input} from '@angular/core';
import {Chat} from '../chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  @Input() chat: Chat;
  tchat:FormGroup;
  constructor(private fb: FormBuilder) { }
  @Output() output = new EventEmitter();

  ngOnInit() {
    this.chat = new Chat();

    this.tchat = this.fb.group({
      'texte': [this.chat.message, Validators.compose([Validators.required])],
    });
  }
  affiche() {
    document.getElementById('zoneChat').innerHTML+="<p><span class='nomJoueur'>";
    document.getElementById('zoneChat').innerHTML+=sessionStorage.getItem('nomJoueur');
    document.getElementById('zoneChat').innerHTML+="&nbsp;:&nbsp;";
    document.getElementById('zoneChat').innerHTML+=this.tchat.controls['texte'].value;
    this.tchat.controls['texte'].setValue('');
  }

}
