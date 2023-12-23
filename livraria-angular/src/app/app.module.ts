import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/shared/header/header.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FooterComponent } from './components/shared/footer/footer.component';

import { LivrariaAppComponent } from './components/livraria-app/livraria-app.component';
import { FiltroComponent } from './components/livraria-app/filtro/filtro.component';

import { LivrosComponent } from './components/livraria-app/livros/livros.component';
import { LivroComponent } from './components/livraria-app/livros/livro/livro.component';

import { HttpClientModule } from '@angular/common/http';
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
    LivrariaAppComponent,
    FiltroComponent,
    LivrosComponent,
    LivroComponent,
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
