import "../styles/StatusMessage.css";

export default function EmptyState({ query }: { query: string }) {
  return (
    <div className="status-message">
      <h2 className="status-message__title">No movies found</h2>
      <p>We couldn't find anything for "{query}". Try another title.</p>
    </div>
  );
}
