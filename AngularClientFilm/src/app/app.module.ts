import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import {JsonpModule} from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import {BookService} from './services/book.service';
import { DetailbookComponent } from './detailbook.component';
import { ROUTES, appRouting } from './routes';
import { ListbookComponent } from './listbook.component';
import { SearchauthorComponent } from './searchauthor.component';
import { BooksbyauthorComponent } from './booksbyauthor.component';



@NgModule({
  declarations: [
    AppComponent,
    appRouting.components,
    SearchauthorComponent,
    BooksbyauthorComponent
  ],
  imports: [
    BrowserModule, JsonpModule, FormsModule, ReactiveFormsModule, appRouting.routes
  ],
  providers: [BookService],
  bootstrap: [AppComponent,SearchauthorComponent]
})
export class AppModule { }
