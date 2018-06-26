import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { ConnectComponent } from './connect/connect.component';
import { FormPersonnageComponent } from './form-personnage/form-personnage.component';
import { PersonnageComponent } from './personnage/personnage.component';

const routes: Routes = [
  {path: '', redirectTo: 'connect', pathMatch: 'full'},
  {path: 'connect', component: ConnectComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ConnectComponent,
    FormPersonnageComponent,
    PersonnageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
