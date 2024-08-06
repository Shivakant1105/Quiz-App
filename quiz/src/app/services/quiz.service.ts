import { Injectable } from "@angular/core";
// RxJS Service
import { tap } from "rxjs/operators";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
// HTTP Services
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
// Environment
import { environment } from "../../environments/environment";

@Injectable()
export class QuizService {
  constructor(private http: HttpClient) {}

  // Error Handler
  public errorHandler(error: HttpErrorResponse) {
    retry(1);
    const err = error.error.message || error.statusText;
    return throwError(error);
  }

  // Get Service
  public getApi(url: string): Observable<any> {
    return this.http.get(environment.apiURL + url).pipe(
      tap((res) => res),
      catchError(this.errorHandler)
    );
  }

  // Post Service
  public postApi(url: string, data: any): Observable<any> {
    return this.http.post(environment.apiURL + url, data).pipe(
      tap((res) => res),
      catchError(this.errorHandler)
    );
  }
}
