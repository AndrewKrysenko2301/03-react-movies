// src/services/movieService.ts
import axios from "axios";
import type { AxiosResponse } from "axios";

import type { Movie } from "../types/movie";

// Типизация ответа от TMDB
export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

// Функция для получения фильмов
export const fetchMovies = async (
  endpoint: string
): Promise<MoviesResponse> => {
  const response: AxiosResponse<MoviesResponse> = await axios.get(
    `https://api.themoviedb.org/3/${endpoint}`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZmZjNGYwMjVhYWJkMGY2YjE2MzgwYzlmZDdjODJiYSIsInN1YiI6IjY4YmM5ZTNjZTFjODBkMTE1NDk0NzBjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hlTBp6JfFTPU3J7FXh9rG_Z7vpiDCBfMixVtS_b5Occ",
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};
