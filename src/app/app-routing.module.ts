import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index.component';
import { AuthGuard } from './shared/guards/auth.guard';


const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const patientsModule = () => import('./patients/patients.module').then(x => x.PatientsModule);

const routes: Routes = [
  { path: '', component: IndexComponent, canActivate: [AuthGuard],
      children: [
        { path: 'patients', loadChildren: patientsModule, canActivate: [AuthGuard] },
      ]
  },
  { path: 'login', loadChildren: accountModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }