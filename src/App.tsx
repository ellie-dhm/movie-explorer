import { useState } from "react";
import { useDebounce } from "./hooks/useDebounce";
import { useMovies } from "./hooks/useMovies";

import MovieGrid from "./components/MovieGrid";
import SkeletonCard from "./components/SkeletonCard";
import ErrorMessage from "./components/ErrorMessage";
import EmptyState from "./components/EmptyState";
import Header from "./components/Header";
import "./styles/App.css";

const SKELETON_COUNT = 12;

function App() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query);
  const { movies, loading, error, retry } = useMovies(debouncedQuery);

  const heading = debouncedQuery.trim()
    ? `Results for "${debouncedQuery.trim()}"`
    : "Popular movies";

  return (
    <>
      <Header query={query} onQueryChange={setQuery} />
      <main className="container app">
        <h1 className="app__heading">{heading}</h1>

        <section aria-live="polite">
          {loading && (
            <div className="movie-grid">
              {Array.from({ length: SKELETON_COUNT }, (_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          )}

          {!loading && error && (
            <ErrorMessage message={error} onRetry={retry} />
          )}

          {!loading && !error && movies.length === 0 && (
            <EmptyState query={debouncedQuery.trim()} />
          )}

          {!loading && !error && movies.length > 0 && (
            <MovieGrid movies={movies} />
          )}
        </section>
      </main>
    </>
  );
}

export default App;
