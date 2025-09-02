import { Component, OnInit } from '@angular/core';
import { GeneroLiterario, Livro } from '../livro/livro';
import { livros } from '../../mock-livros';
import { GeneroLiterarioComponent } from '../genero-literario/genero-literario.component';

@Component({
  selector: 'app-lista-livros',
  imports: [GeneroLiterarioComponent],
  templateUrl: './lista-livros.component.html',
  styleUrl: './lista-livros.component.css'
})
export class ListaLivrosComponent implements OnInit{
  generos: GeneroLiterario[] = [];
  livrosPorGenero : Map<string, Livro[]> = new Map();

  ngOnInit() {
      this.livrosPorGenero = new Map();

      livros.forEach((livro) => {
        const generoId = livro.genero.id
        if(!this.livrosPorGenero.has(generoId)) {
          this.livrosPorGenero.set(generoId, [])
        }  
        this.livrosPorGenero.get(generoId)?.push(livro)


      })

      this.generos = [
        {
    id: 'futebol',
    value: 'Futebol',
    livros: this.livrosPorGenero.get("futebol") ?? []
  },
  {
    id: 'biografia',
    value: 'Biografia',
    livros: this.livrosPorGenero.get("biografia") ?? []
  },
  {
    id: 'historia',
    value: 'História',
    livros: this.livrosPorGenero.get("historia") ?? []
  },
  {
    id: 'esportes',
    value: 'Esportes',
    livros: this.livrosPorGenero.get("esportes") ?? []
  },
  {
    id: 'jornalismo',
    value: 'Jornalismo Esportivo',
    livros: this.livrosPorGenero.get("jornalismo") ?? []
  }
];
  console.log(this.livrosPorGenero)
  }
}
