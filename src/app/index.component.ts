import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './index.component.html',
})
export class IndexComponent  implements OnInit {

  constructor(   
    private router: Router
    
  ) {
    if(this.router.url == '/')
      this.router.navigateByUrl('/patients');
   }

  ngOnInit(): void {
   
  }


}
