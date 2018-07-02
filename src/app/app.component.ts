import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor() {
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyBGNuryULhL6-n2wViP_c0aFHMt1tdsrOQ",
      authDomain: "jdr-multijoueur.firebaseapp.com",
      databaseURL: "https://jdr-multijoueur.firebaseio.com",
      projectId: "jdr-multijoueur",
      storageBucket: "jdr-multijoueur.appspot.com",
      messagingSenderId: "974665755703"
    };
    firebase.initializeApp(config);
  }

}
