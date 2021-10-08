export interface MoviesListItem {
  poster_path?: string;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids: number[];
  id?: number;
  original_title?: string;
  title?: string;
  backdrop_path?: string;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
}

export interface MovieListType {
  page: number;
  results: MoviesListItem[];
  total_pages: number;
  total_results: number;
}

export interface MovieDetailType {
  adult?: boolean;
  backdrop_path?: string;
  belongs_to_collection?: null;
  budget?: number;
  genres: Genre[];
  homepage?: string;
  id?: number;
  imdb_id?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: null;
  production_companies: ProductionCompany[];
  release_date?: string;
  revenue?: number;
  runtime?: number;
  status?: string;
  tagline?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

export interface Genre {
  id?: number;
  name?: string;
}

export interface ProductionCompany {
  id?: number;
  logo_path?: null | string;
  name?: string;
  origin_country?: string;
}

export interface MovieCreditsType {
  id: number;
  cast: CastType[];
  crew: CastType[];
}

export interface CastType {
  adult?: boolean;
  gender?: number;
  id?: number;
  name?: string;
  original_name?: string;
  popularity?: number;
  profile_path?: null | string;
  cast_id?: number;
  character?: string;
  credit_id?: string;
  order?: number;
  job?: string;
}

export interface MovieImagesType {
  id: number;
  backdrops: MovieImageItem[];
  posters: MovieImageItem[];
}

export interface MovieImageItem {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: null | string;
  vote_average: number;
  vote_count: number;
  width: number;
}
