import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Routine } from '../models/routine';
import {Observable} from 'rxjs';

import {catchError, retry} from 'rxjs/operators';
import {Diet} from "../models/diet";


@Injectable({
  providedIn: 'root'
})
export class HttpRoutineService {


  basePath = 'https://homehealthybackendapp.herokuapp.com/api';
  constructor(private http: HttpClient) { }
  // Http Default Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  getAllProducts(id){
    return this.http.get<Routine[]>(`${this.basePath}/rutines`);
  }
  getRoutinesByCustomerId(id){
    return this.http.get<Routine[]>(`${this.basePath}/customers/${id}/rutines`);
  }
  getRoutinesByCollaboratorId(id){
    return this.http.get<Routine[]>(`${this.basePath}/collaborators/${id}/rutines`);
  }

  getRoutine(id): Observable<Routine>{
    return this.http.get<Routine>(`${this.basePath}/rutines/${id}`);
  }
  createRoutine(routine, collaboratorId, customerId): Observable<Routine> {
    return this.http.post<Routine>(`${this.basePath}/rutines/${collaboratorId}/${customerId}`,
      JSON.stringify(routine), this.httpOptions);
  }
}
