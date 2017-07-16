import { DetailBook } from './beans/detailbook';
import { Easy } from './beans/easy';
import { BookService } from './services/book.service';
import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detailbook',
  templateUrl: './app.detailBook.html',
  styleUrls: ['./app.component.css']
})
export class DetailbookComponent implements OnInit {
  detailBook: DetailBook;
  quantites: Array<number>;

  constructor(
    private router: ActivatedRoute,private bookService: BookService) { }

  ngOnInit() {
    const id = this.router.snapshot.params['bookId'];
    console.log('detail' + id);
    this.bookService.getDetailBook(id).subscribe((detailBook: DetailBook) => {this.detailBook = detailBook,this.fillQuantite(detailBook.quantityToCommand)});
  }

  private fillQuantite(quantite : string) {
    
   this.quantites= new Array();
    console.log('quantite'+ this.quantites.length);
   for(let i=1; i<= 10; i++) {
    this.quantites.push(i);
   }
  }
}
