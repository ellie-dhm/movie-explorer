import "../styles/SkeletonCard.css";

export default function SkeletonCard() {
  return (
    <div className="skeleton-card" aria-hidden="true">
      <div className="skeleton-card__poster"></div>
      <div className="skeleton-card__line"></div>
      <div className="skeleton-card__line skeleton-card__line--short"></div>
    </div>
  );
}
