import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service'

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(
        private authService: AuthService,
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            console.log("Error",err)
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authService.logout();
            } else {
                if(err.error.errors)
                    this.showErrors(err.error.errors);
            }            
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }   

    private showErrors(errors: any): void{
        debugger;
        let errorMessage = ``;
        let errorsList = Object.entries(errors);
        errorsList.forEach(function (error) {
            errorMessage += error[1] + '<br />';
        });
        alert(errorMessage);
    }
}