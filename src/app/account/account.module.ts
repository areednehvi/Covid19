import { NgModule } from '@angular/core';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    imports: [
        AccountRoutingModule,
        SharedModule
    ],
    providers: [
      ],
    declarations: [
        LayoutComponent,
        AccountComponent,
    ]
})
export class AccountModule { }