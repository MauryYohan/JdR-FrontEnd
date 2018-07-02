import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { ConnectComponent } from './connect/connect.component';
import { PersonnageComponent } from './personnage/personnage.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormPersonnageComponent} from './form-personnage/form-personnage.component';
import {HttpClientModule} from '@angular/common/http';
import { UtilisateurListComponent } from './utilisateur-list/utilisateur-list.component';
import { PartieComponent } from './partie/partie.component';
import {UtilisateurService} from './utilisateur.service';
import {PersonnageService} from './personnage.service';
import { ListPersonnageComponent } from './list-personnage/list-personnage.component';
import {SalleAttenteComponent} from './salle-attente/salle-attente.component';
import {JoueurService} from './joueur.service';
import { AccueilComponent } from './accueil/accueil.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { FormInscriptionComponent } from './form-inscription/form-inscription.component';
import {PartieService} from './partie.service';
import {FichePersonnageComponent} from './fiche-personnage/fiche-personnage.component';
import {DesComponent} from './des/des.component';
import {ChatComponent} from './chat/chat.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import {FormPartieComponent} from './form-partie/form-partie.component';
import {Ng2Webstorage} from 'ngx-webstorage';

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'connect', component: ConnectComponent},
  {path: 'inscription', component: FormInscriptionComponent},
  {path: 'createPerso', component: PersonnageComponent},
  {path: 'salle-attente/:id', component: SalleAttenteComponent},
  {path: 'formPerso', component: FormPersonnageComponent},
  {path: 'accueil', component: AccueilComponent},
  {path: 'partie/:id', component: PartieComponent},
  {path: 'listUser', component: UtilisateurListComponent},
  {path: 'formPartie', component: FormPartieComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ConnectComponent,
    PersonnageComponent,
    FormPersonnageComponent,
    SalleAttenteComponent,
    PartieComponent,
    UtilisateurListComponent,
    ListPersonnageComponent,
    AccueilComponent,
    InscriptionComponent,
    FormInscriptionComponent,
    FichePersonnageComponent,
    DesComponent,
    ChatComponent,
    UtilisateurComponent,
    FormPartieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    Ng2Webstorage
  ],

  providers: [JoueurService, UtilisateurService, PersonnageService, PartieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
