import { Component, OnInit } from '@angular/core';
import { ApiBookstoreService } from './services/api-bookstore.service';
import { BookModel } from './models/book.model';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  books: BookModel[] = [];

  constructor(private bookstoreService: ApiBookstoreService) {
    this.GetRegisteredBooks();
  }

  GetRegisteredBooks() {
    this.bookstoreService.GetAllBooks().subscribe(books => this.books = books);
  }

  ngOnInit(): void {
  }

}
