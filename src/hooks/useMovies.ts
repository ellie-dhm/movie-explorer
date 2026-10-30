import { useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../api/tmdb";
import type { Movie } from "../types/movie";

export function useMovies(query: string) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    setError(null);

    const trimmed = query.trim();
    const request = trimmed
      ? searchMovies(trimmed, controller.signal)
      : getPopularMovies(controller.signal);

    request
      .then((data) => setMovies(data.results))
      .catch((err) => {
        if (err.name === "AbortError") return;
        setError("We couldn't load movies. Please try again.");
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false);
      });
    return () => controller.abort();
  }, [query, reloadKey]);

  const retry = () => setReloadKey((k) => k + 1);

  return { movies, loading, error, retry };
}
