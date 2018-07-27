import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, take, tap, catchError  } from 'rxjs/operators';

import {AbstractService} from './abstract.service';
import {Author} from '../beans/author';

const urlAutoCompleteAuthor='http://localhost:8090/services/author?name=';

@Injectable({
  providedIn: 'root'
})
export class AutocompleteService extends AbstractService {

  constructor(private http: HttpClient) { 
    super();
  }

  autoComp(name : string) : Observable<Author[]>{
    console.log('service author auto');
        const apiURL = `${urlAutoCompleteAuthor}${name}`;
        return this.http.get<Author[]>(apiURL)
        .pipe(
          tap(author => this.log('fetched author')),
          catchError(this.handleError('getAuthor',[]))
        );
  }

}
