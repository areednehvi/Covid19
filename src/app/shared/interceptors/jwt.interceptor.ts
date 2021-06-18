import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        //debugger;
        if(request.url.indexOf("/auth/signin") == -1){ // token not to be sent for sign in 
            const  authResponse = this.authService.getAuthResponse();
            const isApiURI = request.url.startsWith(environment.apiURI);
            if (isApiURI) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer token****`
                    }
                });
            }
        }        

        return next.handle(request);
    }
}