import { Component, OnInit } from '@angular/core';
import { Livro } from '../../../bookstore-app/books-list/models/book.model';
import { LivrariaService } from '../services/api-bookstore.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {

  livros: Livro[] = [];

  constructor(private livrariaService: LivrariaService) {

    this.obterLivrosCadastrados();

    console.log('TO AQUI', environment.apiUrl);
  }

  obterLivrosCadastrados() {
    this.livrariaService.obterLivros().subscribe(livros => this.livros = livros);
  }

  ngOnInit(): void {
  }

}
