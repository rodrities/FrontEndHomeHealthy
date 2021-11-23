import { Injectable } from '@angular/core'
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {CollabotarorSchedule} from "../models/collabotarorSchedule";
import {catchError, retry} from "rxjs/operators";
import {Session} from "../models/session";

@Injectable({
  providedIn: 'root'
})
export class HttpCollaboratorScheduleService {

  basePath = 'https://homehealthybackendapp.herokuapp.com/api';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.log('An error occurred: ', error.error.message);
    }
    else {
      console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError('Something happened with request, please try again later.');
  }

  getCollaboratorSchedules(id): Observable<CollabotarorSchedule>{
    return  this.http.get<CollabotarorSchedule>(`${this.basePath}/collaborators/${id}/schedules`)
      .pipe(retry(2), catchError(this.handleError));
  }

  createCollaboratorSchedule(collaboratorSchedule: CollabotarorSchedule, id): Observable<CollabotarorSchedule> {
    return this.http.post<CollabotarorSchedule>(`${this.basePath}/collaborators/${id}/schedules`, JSON.stringify(collaboratorSchedule), this.httpOptions);
  }

  deleteCollaboratorSchedule(collaboratorId, scheduleId): Observable<any> {
    console.log("Se esta eliminadno");
    return this.http.delete<CollabotarorSchedule>(`${this.basePath}/collaborators/${collaboratorId}/schedules/${scheduleId}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }
}
