import { BooksbyauthorComponent } from './booksbyauthor.component';
import { DetailbookComponent } from './detailbook.component';
import { ListbookComponent } from './listbook.component';
import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

export const ROUTES :Routes=[ {
  path :'listbook',component:ListbookComponent},
  {path:'detailBook/:bookId' , component:DetailbookComponent},
  {path :'listBookByAuthor/:author',component:BooksbyauthorComponent},
];

export const appRouting: IRouting = {
    routes: RouterModule.forRoot(ROUTES),
    components: [ ListbookComponent, DetailbookComponent, BooksbyauthorComponent ]
};

export interface IRouting {
    routes: ModuleWithProviders,
    components: any[]
}
