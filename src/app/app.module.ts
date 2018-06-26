import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { ConnectComponent } from './connect/connect.component';
import { PersonnageComponent } from './personnage/personnage.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormPersonnageComponent} from './form-personnage/form-personnage.component';

const routes: Routes = [
  {path: '', redirectTo: 'connect', pathMatch: 'full'},
  {path: 'connect', component: ConnectComponent},
  {path: 'createPerso', component: PersonnageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ConnectComponent,
    PersonnageComponent,
    FormPersonnageComponent
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
