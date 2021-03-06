import { Book } from './beans/book';
import { BookService } from './services/book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-booksbyauthor',
  template: `
    <p>
      booksbyauthor Works!
    </p>
  `,
  styles: []
})
export class BooksbyauthorComponent implements OnInit {

   books :Array<Book>;
  constructor(private bookService : BookService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
.map((params: ParamMap) => params.get('author'))
.switchMap(author => this.bookService.getBooksByAuthorLastName(author))
.subscribe((books : Array<Book>)=> {this.books=books});
  }

}
