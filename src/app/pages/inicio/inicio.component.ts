import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { Pelicula } from 'src/app/interfaces/films-interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  paginaActual: number = 1;
  loading: boolean = false;
  peliculasPopulares: Pelicula[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.loading = true;
    this.cargarPeliculas(this.paginaActual);
  }

  siguientePagina() {
    this.loading = true;
    this.paginaActual += 3;
    this.scrollToTop();
    this.cargarPeliculas(this.paginaActual);
  }

  paginaAnterior() {
    if (this.paginaActual > 3) {
      this.loading = true;
      this.paginaActual -= 3; 
      this.scrollToTop();
      this.cargarPeliculas(this.paginaActual);
    }
  }

  cargarPeliculas(pagina: number) {
    setTimeout(() => {
      // Llamo 3 veces al servicio para obtener más resultados por página.
      const requests = Array.from({ length: 3 }, (_, index) =>
        this.movieService.getPopulares(pagina + index)
      );

      forkJoin(requests).subscribe(
        (responses: any[]) => {
          this.peliculasPopulares = responses.reduce(
            (acum, resp) => acum.concat(resp[0].results || []),
            []
          );

          this.loading = false;
        },
        (error) => {
          console.error('Error al cargar las películas:', error);
          this.loading = false;
        }
      );
    }, 500);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'instant' } as any);
  }
}
