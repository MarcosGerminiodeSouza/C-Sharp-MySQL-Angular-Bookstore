import { Component, OnInit } from '@angular/core';
import { ApiBookstoreService } from './services/api-bookstore.service';
import { BookModel } from './models/book.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  //books: BookModel[] = [];
  books$ = new Observable<BookModel[]>();

  constructor(private bookstoreService: ApiBookstoreService) {
    this.GetRegisteredBooks();
  }

  GetRegisteredBooks() {
    //this.bookstoreService.GetAllBooks().subscribe(books => this.books = books);
    this.books$ = this.bookstoreService.GetAllBooks();
  }

  ngOnInit(): void {
  }

}
