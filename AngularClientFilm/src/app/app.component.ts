import { Component, OnInit } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent implements OnInit {


  constructor(private router: Router) {

  }
  ngOnInit(): void {
    this.router.navigate(['listbook']);
  }

}
