import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Diet } from '../models/diet';
import {Observable} from 'rxjs';

import {catchError, retry} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpDietService {


  basePath = 'https://homehealthybackendapp.herokuapp.com/api';
  constructor(private http: HttpClient) { }
  // Http Default Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  };

  getAllProducts(id){
    return this.http.get<Diet[]>(`${this.basePath}/diets`);
  }

  getDietsByCustomerId(id){
    return this.http.get<Diet[]>(`${this.basePath}/customers/${id}/diets`);
  }
  getDietsByCollaboratorId(id){
    return this.http.get<Diet[]>(`${this.basePath}/collaborators/${id}/diets`);
  }

  getDiet(id): Observable<Diet>{
    return this.http.get<Diet>(`${this.basePath}/diets/${id}`);
  }

  createDiet(diet, collaboratorId, customerId): Observable<Diet> {
    return this.http.post<Diet>(`${this.basePath}/diets/${collaboratorId}/${customerId}`,
      JSON.stringify(diet), this.httpOptions);
  }
}

