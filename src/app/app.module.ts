import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { ConnectComponent } from './connect/connect.component';
<<<<<<< HEAD
import { FormPersonnageComponent } from './form-personnage/form-personnage.component';
import { PersonnageComponent } from './personnage/personnage.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', redirectTo: 'connect', pathMatch: 'full'},
  {path: 'connect', component: ConnectComponent},
  {path: 'creationPerso', component: PersonnageComponent}
]
=======
import {PersonnageService} from './personnage.service';

const routes: Routes = [
  {path: '', redirectTo: 'connect', pathMatch: 'full'},
  {path: 'connect', component: ConnectComponent}
];
>>>>>>> master

@NgModule({
  declarations: [
    AppComponent,
    ConnectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
