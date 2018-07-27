import { Book } from './beans/book';
import { BookService } from './services/book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable} from 'rxjs';
import { map, take,switchMap  } from 'rxjs/operators';


@Component({
  selector: 'app-booksbyauthor',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class BooksbyauthorComponent implements OnInit {

   books :Array<Book>;
  constructor(private bookService : BookService, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log("books by author");
    this.route.paramMap.pipe(
      map((params: ParamMap) => params.get('author'))
      , switchMap(author => this.bookService.getBooksByAuthorLastName(author)))
      .subscribe((books: Array<Book>) => { this.books = books });
  }

}
