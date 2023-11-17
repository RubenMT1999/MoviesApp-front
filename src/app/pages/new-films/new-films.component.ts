import { Component } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/films-interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-new-films',
  templateUrl: './new-films.component.html',
  styleUrls: ['./new-films.component.css']
})
export class NewFilmsComponent {

  paginaActual: number = 1;
  loading: boolean = false;
  peliculasPopulares: Pelicula[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    
  }

  siguientePagina() {
    
  }

  paginaAnterior() {
    
  }

  cargarPeliculas(pagina: number) {

  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'instant' } as any);
  }

}
