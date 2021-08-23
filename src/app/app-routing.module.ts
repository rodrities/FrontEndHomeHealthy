import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './users-app/pages/home/home.component';
import {RoutinesComponent} from './users-app/pages/routines/routines.component';
import {DietsComponent} from './users-app/pages/diets/diets.component';
import {SessionsComponent} from './users-app/pages/sessions/sessions.component';
import {CollaboratorsComponent} from './users-app/pages/collaborators/collaborators.component';
import {DivisionPageComponent} from './division-page/division-page.component';
import {DietDetailsComponent} from './users-app/pages/diet-details/diet-details.component';
import {CollaboratorSessionsComponent} from './collaborators-app/pages/collaborator-sessions/collaborator-sessions.component';
import {CollaboratorRoutinesComponent} from './collaborators-app/pages/collaborator-routines/collaborator-routines.component';
import {CollaboratorHomeComponent} from './collaborators-app/pages/collaborator-home/collaborator-home.component';
import {CollaboratorDietsComponent} from './collaborators-app/pages/collaborator-diets/collaborator-diets.component';
import {CollaboratorProfileComponent} from './collaborators-app/pages/collaborator-profile/collaborator-profile.component';
import {RoutineDetailsComponent} from "./users-app/pages/routine-details/routine-details.component";
import {UserCollaboratorProfileComponent} from "./users-app/pages/user-collaborator-profile/user-collaborator-profile.component";
import {LoginComponent} from "./users-app/pages/login/login.component";
import {CollaboratorLoginComponent} from "./collaborators-app/pages/collaborator-login/collaborator-login.component";
import {CollaboratorCreateDietComponent} from "./collaborators-app/pages/collaborator-create-diet/collaborator-create-diet.component";
import {CollaboratorCreateRoutineComponent} from "./collaborators-app/pages/collaborator-create-routine/collaborator-create-routine.component";


const routes: Routes = [
  { path: '', component: DivisionPageComponent },
  { path: 'home', component: HomeComponent},
  { path: 'routines', component: RoutinesComponent },
  { path: 'diets', component: DietsComponent },
  { path: 'collaborators', component: CollaboratorsComponent },
  { path: 'sessions', component: SessionsComponent },
  { path: 'diets/:id', component: DietDetailsComponent },
  { path: 'routines/:id', component: RoutineDetailsComponent },
  { path: 'collaborator/home', component: CollaboratorHomeComponent},
  { path: 'collaborator/routines', component: CollaboratorRoutinesComponent },
  { path: 'collaborator/diets', component: CollaboratorDietsComponent },
  { path: 'collaborator/sessions', component: CollaboratorSessionsComponent },
  { path: 'collaborator/profile', component: CollaboratorProfileComponent },
  { path: 'collaborators/:id', component: UserCollaboratorProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'collaborator/login', component: CollaboratorLoginComponent},
  { path: 'collaborator/create-diet', component: CollaboratorCreateDietComponent},
  { path: 'collaborator/create-routine', component: CollaboratorCreateRoutineComponent}
  /*
  { path: 'collaborators/:id', component: CollaboratorProfileComponent },
 /
  { path: 'register', component: RegisterComponent },
  { path: 'zoom', component: ZoomComponent },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
