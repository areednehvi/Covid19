import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIHelperService } from './api-helper.service';
import { environment } from '../../../environments/environment';

@Injectable()
export class PatientsService {
  httpHeaders: any;

  constructor(
    private apiHelperService: APIHelperService,
    ) {
      this.httpHeaders = {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'accept': 'application/json',
        })
      };
  }


  public updatePatient(model: any): Observable<any> {
    return new Observable((observer) => {
      if(model){ 
        let uri =  `${environment.apiURI}/Patients/${model.id}`;
        this.apiHelperService.put(uri, model, this.httpHeaders)
          .subscribe(
            result => {
              //debugger;
              observer.next(result);
              observer.complete();
            }
          );
      }      
    });
  }

  public getPatients(): Observable<any> {
    return new Observable((observer) => {
      let uri = `${environment.apiURI}/patients/`;
      this.apiHelperService.get(uri, this.httpHeaders)
        .subscribe(
          response => {
            debugger;
            observer.next(response);
            observer.complete();
          }
        );
      }
    );
  }

  public getPatient(id: any): Observable<any> {
    return new Observable((observer) => {
      let uri = `${environment.apiURI}/patients/${id}`;
      this.apiHelperService.get(uri, this.httpHeaders)
        .subscribe(
          response => {            
            observer.next(response);
            observer.complete();
          }
        );
      }
    );
  }

  public createPatient(patient: any): Observable<any> {
    return new Observable((observer) => {
      let uri = `${environment.apiURI}/patients`;
      this.apiHelperService.post(uri, patient, this.httpHeaders)
        .subscribe(
          result => {
            observer.next(result);
            observer.complete();
          }
        );
      }
    );
  }

  public getStatuses(): Observable<any> {
    return new Observable((observer) => {
      let uri = `${environment.apiURI}/statuses/`;
      this.apiHelperService.get(uri, this.httpHeaders)
        .subscribe(
          response => {
            debugger;
            observer.next(response);
            observer.complete();
          }
        );
      }
    );
  }
}
