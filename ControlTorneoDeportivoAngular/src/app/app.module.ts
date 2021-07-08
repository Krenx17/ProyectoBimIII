import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { TournamentsComponent } from './component/tournaments/tournaments.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { UsuariosComponent } from './component/usuarios/usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './component/register/register.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { MatchComponent } from './component/match/match.component';
import { TeamsComponent } from './component/teams/teams.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TournamentsComponent,
    NavbarComponent,
    UsuariosComponent,
    RegisterComponent,
    PrincipalComponent,
    MatchComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
