import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { MatchComponent } from './component/match/match.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { RegisterComponent } from './component/register/register.component';
import { TeamsComponent } from './component/teams/teams.component';
import { TournamentsComponent } from './component/tournaments/tournaments.component';
import { UsuariosComponent } from './component/usuarios/usuarios.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'principal', component: PrincipalComponent},
  { path: 'users', component: UsuariosComponent},
  { path: 'tournaments', component: TournamentsComponent},
  { path: 'teams', component: TeamsComponent},
  { path: 'match', component: MatchComponent},
  { path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
