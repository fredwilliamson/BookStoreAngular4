import { Component, OnInit } from '@angular/core';
import {BookService} from './services/book.service';
import { Book } from './beans/book';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-listbook',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ListbookComponent implements OnInit {

  title = 'app';
  books : Array<Book>;
  constructor(private bookService : BookService) { }

  ngOnInit() {
       this.bookService.getAllBooks().subscribe((books : Array<Book>)=> {this.books=books});
   console.log(this.books);
  }

}
