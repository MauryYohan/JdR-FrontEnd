import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { ConnectComponent } from './connect/connect.component';
import { PersonnageComponent } from './personnage/personnage.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormPersonnageComponent} from './form-personnage/form-personnage.component';
import {PersonnageService} from './personnage.service';
import {HttpClientModule} from '@angular/common/http';
<<<<<<< Updated upstream
import { UtilisateurListComponent } from './utilisateur-list/utilisateur-list.component';
import { PartieComponent } from './partie/partie.component';
import {UtilisateurService} from './utilisateur.service';
import {PersonnageService} from './personnage.service';
=======
import { ListPersonnageComponent } from './list-personnage/list-personnage.component';
>>>>>>> Stashed changes

const routes: Routes = [
  {path: '', redirectTo: 'connect', pathMatch: 'full'},
  {path: 'connect', component: ConnectComponent},
<<<<<<< Updated upstream
  {path: 'createPerso', component: FormPersonnageComponent},
  {path: 'salle-attente', component: SalleAttenteComponent},
=======
  {path: 'createPerso', component: PersonnageComponent},
  {path: 'formPerso', component: FormPersonnageComponent}
>>>>>>> Stashed changes
];

@NgModule({
  declarations: [
    AppComponent,
    ConnectComponent,
    PersonnageComponent,
    FormPersonnageComponent,
<<<<<<< Updated upstream
    SalleAttenteComponent,
    PartieComponent,
    UtilisateurListComponent
=======
    ListPersonnageComponent,
>>>>>>> Stashed changes
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgbModule.forRoot()
  ],
<<<<<<< Updated upstream
  providers: [JoueurService, UtilisateurService, PersonnageService],
=======
  providers: [PersonnageService],
>>>>>>> Stashed changes
  bootstrap: [AppComponent]
})
export class AppModule { }
