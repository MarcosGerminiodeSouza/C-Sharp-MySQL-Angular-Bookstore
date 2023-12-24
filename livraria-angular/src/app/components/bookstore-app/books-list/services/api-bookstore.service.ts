import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BookModel } from "../models/book.model";

@Injectable({ providedIn: 'root' })
export class ApiBookstoreService {

  private url = environment.apiUrl;

  constructor(private httpClitent: HttpClient) {}

  GetAllBooks() {
    return this.httpClitent.get<BookModel[]>(this.url);
  }
}
