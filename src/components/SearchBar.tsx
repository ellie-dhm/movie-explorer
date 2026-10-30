import "../styles/SearchBar.css";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="search-bar">
      <svg
        className="search-bar__icon"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7" />
        <path d="M20 20l-3.5-3.5" />
      </svg>
      <input
        className="search-bar__input"
        type="search"
        placeholder="Search movies..."
        aria-label="Search movies"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {value && (
        <button
          type="button"
          className="search-bar__clear"
          aria-label="Clear search"
          onClick={() => onChange("")}
        >
          ×
        </button>
      )}
    </div>
  );
}
