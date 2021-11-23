import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {AppRoutingModule} from './app-routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { UserHeaderComponent } from './users-app/shared/components/user-header/user-header.component';

import { HomeComponent } from './users-app/pages/home/home.component';
import { RoutinesComponent } from './users-app/pages/routines/routines.component';
import { DietsComponent } from './users-app/pages/diets/diets.component';
import { SessionsComponent } from './users-app/pages/sessions/sessions.component';
import { CollaboratorsComponent } from './users-app/pages/collaborators/collaborators.component';
import { DietDetailsComponent } from './users-app/pages/diet-details/diet-details.component';
import { DivisionPageComponent } from './division-page/division-page.component';
import { CollaboratorHeaderComponent } from './collaborators-app/shared/components/collaborator-header/collaborator-header.component';
import { CollaboratorSessionsComponent } from './collaborators-app/pages/collaborator-sessions/collaborator-sessions.component';
import { CollaboratorDietsComponent } from './collaborators-app/pages/collaborator-diets/collaborator-diets.component';
import { CollaboratorRoutinesComponent } from './collaborators-app/pages/collaborator-routines/collaborator-routines.component';
import { CollaboratorHomeComponent } from './collaborators-app/pages/collaborator-home/collaborator-home.component';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxMatNativeDateModule } from '@angular-material-components/datetime-picker';
import { CollaboratorProfileComponent } from './collaborators-app/pages/collaborator-profile/collaborator-profile.component';
import {MatDatepickerModule} from "@angular/material/datepicker";

import { MatRadioModule } from '@angular/material/radio';
import { RoutineDetailsComponent } from './users-app/pages/routine-details/routine-details.component';
import { UserCollaboratorProfileComponent } from './users-app/pages/user-collaborator-profile/user-collaborator-profile.component';
import { LoginComponent } from './users-app/pages/login/login.component';
import { CollaboratorLoginComponent } from './collaborators-app/pages/collaborator-login/collaborator-login.component';
import { CollaboratorCreateDietComponent } from './collaborators-app/pages/collaborator-create-diet/collaborator-create-diet.component';
import { CollaboratorCreateRoutineComponent } from './collaborators-app/pages/collaborator-create-routine/collaborator-create-routine.component';
import { ConferencesComponent } from './users-app/pages/conferences/conferences.component';




@NgModule({
  declarations: [
    AppComponent,
    UserHeaderComponent,
    HomeComponent,
    RoutinesComponent,
    DietsComponent,
    SessionsComponent,
    CollaboratorsComponent,
    DietDetailsComponent,
    DivisionPageComponent,
    CollaboratorHeaderComponent,
    CollaboratorSessionsComponent,
    CollaboratorDietsComponent,
    CollaboratorRoutinesComponent,
    CollaboratorHomeComponent,
    CollaboratorProfileComponent,
    RoutineDetailsComponent,
    UserCollaboratorProfileComponent,
    LoginComponent,
    CollaboratorLoginComponent,
    CollaboratorCreateDietComponent,
    CollaboratorCreateRoutineComponent,
    ConferencesComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatSelectModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatNativeDateModule,
    MatDatepickerModule,
    MatRadioModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
