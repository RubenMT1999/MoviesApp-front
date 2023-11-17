import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent implements OnInit{

  constructor(private movieService: MovieService){}

  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }



}
