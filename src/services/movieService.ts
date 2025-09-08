import axios from "axios";
import type { AxiosResponse } from "axios";

import type { Movie } from "../types/movie";

export interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const fetchMovies = async (
  endpoint: string
): Promise<MoviesResponse> => {
  const response: AxiosResponse<MoviesResponse> = await axios.get(
    `https://api.themoviedb.org/3/${endpoint}`,
    {
      headers: {
        Authorization: "Bearer ${import.meta.env.VITE_TMDB_TOKEN}",
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};
