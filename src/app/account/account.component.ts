import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccountModel } from './account.model';
import { AuthService } from '../shared/services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.sass']
})
export class AccountComponent implements OnInit {

  authResponse: boolean = false;
  accountModel: AccountModel = new AccountModel();
  private subscriptions: Subscription[] = [];

  constructor(
    private authService: AuthService,
    public activatedRoute: ActivatedRoute,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
  }

  authorize(): void {
    const sb = this.authService.authorize(this.accountModel)
        .subscribe(
          authResponse => {
            this.authResponse = authResponse;
            if(this.authResponse)
              this.router.navigate(['/patients']);
        });
    
        this.subscriptions.push(sb);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sb => sb.unsubscribe());
  }

}
