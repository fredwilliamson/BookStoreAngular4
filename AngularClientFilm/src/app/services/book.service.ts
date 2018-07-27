import { Injectable,Inject } from '@angular/core';
import {Jsonp,Response} from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, take, tap, catchError  } from 'rxjs/operators';


import { Book } from '../beans/book';
import { Author } from '../beans/author';
import { DetailBook } from '../beans/detailbook';
import {AbstractService} from './abstract.service';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Access-Control-Allow-Origin':'*',
    'Authorization':'authkey',
    'userid':'1',
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root',
})
export class BookService extends AbstractService {

   urlServiceBooks ='http://localhost:8090/services/books';
   urlServiceDeatilBook ='http://localhost:8090/services/book';
   books : Array<Book>;

  constructor(private http: HttpClient) {
    super();
   }

  getAllBooks() : Observable<Book[]> {
    return this.getBooks(this.urlServiceBooks);
  }

  getDetailBook(id : string) : Observable<Book>{
    console.log('servicedetail');
        const apiURL = `${this.urlServiceDeatilBook}/id/${id}`;
        return this.http.get<Book>(apiURL)
        .pipe(
          tap(books => this.log('fetched books')),
          catchError(this.handleError<Book>('getDetailBook'))
        );
  }

  getBooksByAuthorLastName(auhtorLastName : string) : Observable<Book[]> {
    const apiURL = `${this.urlServiceBooks}/author/${auhtorLastName}`;
    return this.getBooks(apiURL);
  }
  
  private getBooks(urlToCall : string) : Observable<Book[]> {
     return this.http.get<Book[]>(urlToCall)
     .pipe(
       tap(books => this.log('fetched books')),
       catchError(this.handleError('getBooks', []))
     );
  }
}


