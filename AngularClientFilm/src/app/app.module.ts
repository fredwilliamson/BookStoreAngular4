import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import {JsonpModule} from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule }    from '@angular/common/http';
import {  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule} from '@angular/material/';


import { AppComponent } from './app.component';
import {BookService} from './services/book.service';
import {AutocompleteService} from './services/autocomplete.service'
import { DetailbookComponent } from './detailbook.component';
import { ROUTES, appRouting } from './routes';
import { ListbookComponent } from './listbook.component';
import { BooksbyauthorComponent } from './booksbyauthor.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    appRouting.components,
    BooksbyauthorComponent,
    AutocompleteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule, JsonpModule, FormsModule, ReactiveFormsModule, appRouting.routes, HttpClientModule, BrowserAnimationsModule,  MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
  ],
  providers: [BookService,AutocompleteService],
  bootstrap: [AppComponent,AutocompleteComponent]
})
export class AppModule { }
