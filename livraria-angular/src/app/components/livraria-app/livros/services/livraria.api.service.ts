import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Livro } from "../models/livro.model";

@Injectable({ providedIn: 'root' })
export class LivrariaService {

  private url = environment.apiUrl;

  constructor(private httpClitent: HttpClient) {}

  obterLivros() {
    return this.httpClitent.get<Livro[]>(this.url);
  }
}
