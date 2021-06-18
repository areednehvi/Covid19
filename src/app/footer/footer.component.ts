import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  templateUrl: './footer.component.html',
  selector: '<app-footer></app-footer>',
})
export class FooterComponent implements OnInit {
  currentDate: Date;
  constructor(

  ) {

    this.currentDate = new Date();
  }

  ngOnInit(): void {
    

  }

}
