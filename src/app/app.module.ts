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
import {Personnage} from './personnage';
import {P} from '@angular/core/src/render3';
import { InscriptionComponent } from './inscription/inscription.component';
import { FormInscriptionComponent } from './form-inscription/form-inscription.component';
import {PartieService} from './partie.service';
import {FichePersonnageComponent} from './fiche-personnage/fiche-personnage.component';
import {DesComponent} from './des/des.component';
import {ChatComponent} from './chat/chat.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import {AuthGuardService} from './auth-guard.service';
import {AuthService} from './auth.service';

const routes: Routes = [
  {path: '', redirectTo: 'accueil', pathMatch: 'full'},
  {path: 'connect', component: ConnectComponent},
  {path: 'inscription', component: FormInscriptionComponent},
  {path: 'createPerso', canActivate: [AuthGuardService], component: PersonnageComponent},
  {path: 'salle-attente/:id', canActivate: [AuthGuardService], component: SalleAttenteComponent},
  {path: 'formPerso', canActivate: [AuthGuardService], component: FormPersonnageComponent},
  {path: 'accueil', component: AccueilComponent},
  {path: 'partie/:id', canActivate: [AuthGuardService], component: PartieComponent},
  {path: 'listUser', canActivate: [AuthGuardService], component: UtilisateurListComponent}
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
    UtilisateurComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],

  providers: [JoueurService, UtilisateurService, PersonnageService, PartieService, AuthGuardService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
