import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbDateAdapter, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { of, Subscription } from 'rxjs';
import { catchError, first, tap } from 'rxjs/operators';
import { PatientsService } from 'src/app/shared/services/patients.service';

import { IPatients } from '../patient.model';


@Component({
  templateUrl: './edit-patient-modal.component.html',
})
export class EditPatientModalComponent implements OnInit, OnDestroy {
  @Input() id: number = 0;
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  statuses: [] = [];
  patient: IPatients;


  private subscriptions: Subscription[] = [];
  constructor(
    private patientsService: PatientsService,
    public modal: NgbActiveModal
    ) { 
      this.patient = {
        aadhar : '',email :'', id: '' , name :'',phoneno : '', status: ''
      }
    }

  ngOnInit(): void {
    this.loadStatuses();

    if(this.id)
      this.getPatient();
    
  }

  loadStatuses() {
    const sb = this.patientsService.getStatuses().subscribe(
      response => {        
        this.statuses = response;
      }
    );

    this.subscriptions.push(sb);
  }

  getPatient() {
    if (this.id) {
      const sb = this.patientsService.getPatient(this.id).pipe(
        first(),
        catchError((err) => {
          alert(err)
          return err;
        })
      ).subscribe((patient: any) => {
        debugger;
        this.patient = patient;        
      });
      this.subscriptions.push(sb);
    }
  }

  update() {
    debugger;
    const sbUpdate = this.patientsService.updatePatient(this.patient).pipe( 
      tap(() => {
        
      }),
      catchError((err) => {
        alert(err.error);
        return err;
      }),
    ).subscribe(res =>{ 
      this.modal.close();
      //this.patient = res
    });
    this.subscriptions.push(sbUpdate);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }



}
