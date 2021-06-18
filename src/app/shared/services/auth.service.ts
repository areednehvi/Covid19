import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountModel  } from '../../account/account.model';
import { Router } from '@angular/router';

@Injectable()
export class AuthService  {
  httpHeaders: any;
  state: any;

  constructor(
    private router: Router,
    ) {
      this.state = this.router.routerState.snapshot;

      this.httpHeaders = {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
        })
      };
  }

  public getAuthResponse(): Boolean {
    return localStorage.getItem('AuthResponse') ? true : false;
  }

  public authorize(accountModel: AccountModel): Observable<any> {
    return new Observable((observer) => {

      if(accountModel.username == 'covid19@agency.com' && accountModel.password == '12345678'){
        localStorage.setItem('AuthResponse', 'true'); 
        observer.next(true);
      }
      });
  }

  public logout(): void {
    localStorage.removeItem('AuthResponse');
    this.router.navigate(['/login']);
  }


}
