import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { ConnectComponent } from './connect/connect.component';
import { PersonnageComponent } from './personnage/personnage.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormPersonnageComponent} from './form-personnage/form-personnage.component';
import { SalleAttenteComponent } from './salle-attente/salle-attente.component';
import {JoueurService} from './joueur.service';
import {HttpClientModule} from '@angular/common/http';
import { UtilisateurListComponent } from './utilisateur-list/utilisateur-list.component';
import { PartieComponent } from './partie/partie.component';

const routes: Routes = [
  {path: '', redirectTo: 'connect', pathMatch: 'full'},
  {path: 'connect', component: ConnectComponent},
  {path: 'salle-attente', component: SalleAttenteComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ConnectComponent,
    PersonnageComponent,
    FormPersonnageComponent,
    SalleAttenteComponent,
    PartieComponent
    UtilisateurListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [JoueurService],
  bootstrap: [AppComponent]
})
export class AppModule { }
