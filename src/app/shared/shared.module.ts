import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AuthService } from './services/auth.service';
import { APIHelperService } from './services/api-helper.service';
import { ErrorInterceptor  } from './interceptors/error.interceptor';
import { JwtInterceptor  } from './interceptors/jwt.interceptor';
import { PatientsService } from './services/patients.service';
import { PhonePipe } from './pipes/phone.pipe';


@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
    ],
    providers: [
        AuthService,
        APIHelperService,
        PatientsService,
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
      ],
    declarations: [
        PhonePipe
    ],
    exports: [
        PhonePipe,
        HttpClientModule,
        FormsModule,
        CommonModule
    ]

})
export class SharedModule { }