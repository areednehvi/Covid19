import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError,  tap } from 'rxjs/operators';

declare var $: any;

@Injectable()
export class APIHelperService {

    constructor(
        private http: HttpClient
    ) { }

    public post(url: string, body: any, httpHeaders: any): Observable<any> {
        return this.http.post<any>(url, body, httpHeaders).pipe(
            tap( response => {

            }),
            catchError(this.handleError)
        );
    }

    public put(url: string, body: any, httpHeaders: any): Observable<any> {
        return this.http.put<any>(url, body, httpHeaders).pipe(
            tap( response => {
             
            }),
            catchError(this.handleError)
        );
    }

    public get(url: string, httpHeaders: any, isLoading: Boolean = true): Observable<any> {
        return this.http.get<any>(url, httpHeaders).pipe(
            tap( response => {
            }),
            catchError(this.handleError)
        );    
    }

    public delete(url: string, httpHeaders: any): Observable<any> {
        return this.http.delete<any>(url).pipe(
            tap( response => {

            }),
            catchError(this.handleError)
        );      
    }

    private handleError(error: HttpErrorResponse) {


        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // server-side error
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        debugger;
        // window.alert(errorMessage);
        return throwError(error);
    }

}
