import { Injectable,Inject } from '@angular/core';
import {Jsonp,Response} from '@angular/http';
import 'rxjs/add/operator/map';


import { Book } from '../beans/book';
import { Author } from '../beans/author';
import { DetailBook } from '../beans/detailbook';

@Injectable()
export class BookService {

   urlServiceBooks ='http://localhost:8080/library/services/books';
   urlServiceDeatilBook ='http://localhost:8080/library/services/book';


  constructor(private jsonp : Jsonp) {

   }

  getAllBooks() {
    const apiURL = `${this.urlServiceBooks}?callback=JSONP_CALLBACK`;
    return this.getBooks(apiURL);
  }

  getDetailBook(id : string) {
    console.log('servicedetail');
        const apiURL = `${this.urlServiceDeatilBook}/id/${id}?callback=JSONP_CALLBACK`;
        return this.jsonp.request(apiURL)
        .map(res => {
          return res.json();
        });
  }

  getBooksByAuthorLastName(auhtorLastName : string) {
    const apiURL = `${this.urlServiceBooks}/author/${auhtorLastName}??callback=JSONP_CALLBACK`;
    return this.getBooks(apiURL);
  }
  
  private getBooks(urlToCall : string) {
        return this.jsonp.request(urlToCall)
        .map(res => {
          console.log(res.json().map);
          return res.json().map(item => {
            console.log(item);
            return new Book(item.title,item.price,item.author,item.id);
          });
        });
  }
}
