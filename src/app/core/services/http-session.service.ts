import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Session} from '../models/session';
import {catchError, retry} from 'rxjs/operators';
import {Customer} from '../models/customer';
import {Diet} from '../models/diet';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {

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

  getSession(id): Observable<Session>{
    return this.http.get<Session>(`${this.basePath}/customers/${id}/sessions`)
      .pipe(retry(2), catchError(this.handleError));
  }

  getCustomer(id): Observable<Customer>{
    return this.http.get<Customer>(`${this.basePath}/${id}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  getDiet(sessionId): Observable<Diet>{
    return this.http.get<Diet>(`${this.basePath}/diets/sessions/\{id}?id=${sessionId}`, this.httpOptions)
      .pipe(retry(2), catchError(this.handleError));
  }

  createSession(session: Session, customerid, collaboratorid): Observable<Session> {
    return this.http.post<Session>(`${this.basePath}/customers//${customerid}/${collaboratorid}/sessions`, JSON.stringify(session), this.httpOptions);
  }
  createDiet(diet: Diet, id): Observable<Diet> {
    return this.http.post<Diet>(`${this.basePath}/diets/sessions/${id}`, JSON.stringify(diet), this.httpOptions);
  }
}

