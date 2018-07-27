import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Observable} from 'rxjs';
import { map, startWith,switchMap,debounceTime,distinctUntilChanged  } from 'rxjs/operators';
import { Router } from '@angular/router';

import {AutocompleteService} from '../services/autocomplete.service';
import { Author } from '../beans/author';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  searchForm : FormGroup;
  searchCtrl : FormControl;
  authors : Observable<any[]>

  constructor(private fb: FormBuilder,private autoCompService: AutocompleteService, private router: Router) {
    this.searchCtrl = fb.control('');
    this.searchForm = fb.group({
      searchAuthor: this.searchCtrl
    });
    this.authors=this.searchCtrl.valueChanges.pipe(startWith(null), debounceTime(200), distinctUntilChanged(),
      switchMap(val => {
        return autoCompService.autoComp(val);
      }));
  }

  ngOnInit() {
  }

  searchAuthor() {
    console.log('search author method()');
    console.log(this.searchForm.get('searchAuthor').value);
    this.router.navigate(['/listBookByAuthor/',this.searchForm.get('searchAuthor').value]);
  }

}