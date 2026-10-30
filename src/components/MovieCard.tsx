import type { Movie } from "../types/movie";
import "../styles/MovieCard.css";

const IMAGE_BASE = "https://image.tmdb.org/t/p/w500";

export default function MovieCard({ movie }: { movie: Movie }) {
  const year = movie.release_date ? movie.release_date.slice(0, 4) : "N/A";

  return (
    <article className="movie-card">
      {movie.poster_path ? (
        <img
          className="movie-card__poster"
          src={`${IMAGE_BASE}${movie.poster_path}`}
          alt={`${movie.title} poster`}
          loading="lazy"
        ></img>
      ) : (
        <div className="movie-card__placeholder">No poster</div>
      )}
      <div className="movie-card__info">
        <h3 className="movie-card__title">{movie.title}</h3>
        <p className="movie-card__meta">
          <span>{year}</span>
          <span className="movie-card__rating">
            ★ {movie.vote_average.toFixed(1)}
          </span>
        </p>
      </div>
    </article>
  );
}
