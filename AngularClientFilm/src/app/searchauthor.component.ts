import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchauthor',
  template: `
  <form class="form-inline my-2 my-lg-0" (ngSubmit)="searchAuthor()" [formGroup]="searchForm">
      <input class="form-control mr-sm-2" type="text" placeholder="Search" formControlName="searchAuthor">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  `,
  styles: []
})
export class SearchauthorComponent implements OnInit {

  searchForm : FormGroup;
  searchCtrl : FormControl;
  constructor(private fb: FormBuilder, private router: Router) {
    this.searchCtrl=fb.control('');
    this.searchForm = fb.group({
      searchAuthor : this.searchCtrl
    });
  }

  ngOnInit() {
  }

  searchAuthor() {
    console.log(this.searchForm.get('searchAuthor').value);
    this.router.navigate(['/listBookByAuthor/',this.searchForm.get('searchAuthor').value]);
  }
  
}
