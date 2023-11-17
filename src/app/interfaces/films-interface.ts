
export interface ListaRespuestaMDB{
}

export interface RespuestaMDB {
  page?: number;
  results?: Pelicula[];
  total_pages?: number;
  total_results?: number;
}

export interface Pelicula {
  adult?: boolean;
  id?: number;
  overview?: string;
  popularity?: number;
  title?: string;
  video?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  original_language?: string;
  original_title?: string;
  poster_path?: string;
  release_date?: string;
  vote_average?: number;
  vote_count?: number;
}