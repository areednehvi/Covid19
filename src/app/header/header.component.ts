import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

declare var $: any;
@Component({
  templateUrl: './header.component.html',
  selector: '<app-header></app-header>',
})
export class HeaderComponent implements OnInit {
  constructor(
    private authService: AuthService
  ) {

  }

  ngOnInit(): void {
    

  }

  logout(): void {
    this.authService.logout();
  }

}
