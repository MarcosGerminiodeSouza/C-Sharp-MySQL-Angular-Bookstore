import { Component, Input, OnInit } from '@angular/core';
import { BookModel } from '../models/book.model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {

  @Input()
  book! : BookModel;

  constructor() { }

  ngOnInit(): void {
  }

}
