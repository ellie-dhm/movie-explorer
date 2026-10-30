import type { Movie } from "../types/movie";
import MovieCard from "./MovieCard";

export default function MovieGrid({ movies }: { movies: Movie[] }) {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
