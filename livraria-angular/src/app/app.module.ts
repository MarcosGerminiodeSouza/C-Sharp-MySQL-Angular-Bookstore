import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { BookstoreAppComponent } from './components/bookstore-app/bookstore-app.component';
import { FilterComponent } from './components/bookstore-app/filter/filter.component';
import { BooksListComponent } from './components/bookstore-app/books-list/books-list.component';
import { BookItemComponent } from './components/bookstore-app/books-list/book-item/book-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    BookstoreAppComponent,
    FilterComponent,
    BooksListComponent,
    BookItemComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
