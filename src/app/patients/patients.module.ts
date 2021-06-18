import { NgModule } from '@angular/core';

import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { PatientsComponent } from './patients.component';
import { PatientsRoutingModule } from './patients-routing.module';
import { EditPatientModalComponent } from './edit-patient-modal/edit-patient-modal.component';


@NgModule({
    imports: [
        SharedModule,
        PatientsRoutingModule,
    ],
    providers: [

      ],
    declarations: [
        LayoutComponent,
        PatientsComponent,
        EditPatientModalComponent
    ]
})
export class PatientsModule { }