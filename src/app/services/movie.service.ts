import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environment/environment';
import { RespuestaMDB } from '../interfaces/films-interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  constructor(private http: HttpClient) { }


  getPopulares( numeroPagina: Number ){
    return this.http.get<RespuestaMDB[]>(`${base_url}/movies?limit=50&page=${numeroPagina}`)
  }


}
