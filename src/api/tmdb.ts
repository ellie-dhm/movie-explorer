import type { MoviesResponse } from "../types/movie";

const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_KEY;
if (!API_KEY) {
  console.warn(
    "VITE_TMDB_KEY is not set. Add it to .env or your deploy settings.",
  );
}

async function request<T>(
  path: string,
  params: Record<string, string> = {},
  signal?: AbortSignal,
): Promise<T> {
  const url = new URL(`${BASE_URL}${path}`);
  url.searchParams.set("api_key", API_KEY);
  Object.entries(params).forEach(([key, value]) =>
    url.searchParams.set(key, value),
  );

  const res = await fetch(url, { signal });
  if (!res.ok) throw new Error(`Request failed (${res.status})`);
  return res.json();
}

export const getPopularMovies = (signal?: AbortSignal) =>
  request<MoviesResponse>("/movie/popular", {}, signal);

export const searchMovies = (query: string, signal?: AbortSignal) =>
  request<MoviesResponse>("/search/movie", { query }, signal);
