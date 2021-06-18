import { Component, OnInit, } from '@angular/core';
import { PatientsService } from '../shared/services/patients.service';
import { IPatients } from './patient.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditPatientModalComponent } from './edit-patient-modal/edit-patient-modal.component';

@Component({
  templateUrl: './patients.component.html',
})
export class PatientsComponent implements OnInit {

  patients: IPatients[];

  constructor(
    private modalService: NgbModal,
    private patientsService: PatientsService
  ) {
      this.patients = [];

   }

  ngOnInit() { 

    this.getPatients();

  }

  getPatients(): void {
    this.patientsService.getPatients()
      .subscribe(result => {
        debugger
        this.patients = result;        
      });
  }

  viewDetails(id: string): void {
     debugger;
    const modalRef = this.modalService.open(EditPatientModalComponent, { size: 'xl' });
    modalRef.componentInstance.id = id;
    modalRef.result.then((res) => {
     // debugger;   
     this.getPatients();       
    });

    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
     // debugger;
      //this.getPatients();
    })
  }

  getStatusClass(patient: IPatients): string {
    if(patient.status == 'Positive')
      return 'positive';
    else if(patient.status == 'Negative')
      return 'negative'
    else
      return 'recovered'
  }


}
