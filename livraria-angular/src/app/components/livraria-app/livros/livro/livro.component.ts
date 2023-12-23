import { Component, OnInit } from '@angular/core';
import { Livro } from '../models/livro.model';
import { LivrariaService } from '../services/livraria.api.service';
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
