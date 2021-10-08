import {request} from '../utils/request';
import {ApiResponse} from 'apisauce';
import {
  MovieCreditsType,
  MovieDetailType,
  MovieImagesType,
  MovieListType,
} from './dto';

async function getMoviesTopRated(): Promise<MovieListType | null> {
  const response = await request.get<MovieListType>('/movie/top_rated');
  return handleResponse<MovieListType>(response);
}

async function getMoviesUpcoming(): Promise<MovieListType | null> {
  const response = await request.get<MovieListType>('/movie/upcoming');
  return handleResponse<MovieListType>(response);
}

async function getMovieSearchQuery(
  query: string,
): Promise<MovieListType | null> {
  const response = await request.get<MovieListType>(
    `/search/movie?query=${query}`,
  );
  return handleResponse<MovieListType>(response);
}

async function getMovieDetails(id: number): Promise<MovieDetailType | null> {
  const response = await request.get<MovieDetailType>(`/movie/${id}`);
  return handleResponse<MovieDetailType>(response);
}

async function getMovieCredits(id: number): Promise<MovieCreditsType | null> {
  const response = await request.get<MovieCreditsType>(`/movie/${id}/credits`);
  return handleResponse<MovieCreditsType>(response);
}

async function getMovieImages(id: number): Promise<MovieImagesType | null> {
  const response = await request.get<MovieImagesType>(`/movie/${id}/images`);
  return handleResponse<MovieImagesType>(response);
}

function handleResponse<T>(response: ApiResponse<T, T>) {
  if (response.ok && response?.data) {
    return response.data;
  }
  return null;
}

export const api = {
  getMoviesTopRated,
  getMoviesUpcoming,
  getMovieCredits,
  getMovieDetails,
  getMovieImages,
  getMovieSearchQuery,
};
