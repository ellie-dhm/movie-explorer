import SearchBar from "./SearchBar";
import "../styles/Header.css";

interface HeaderProps {
  query: string;
  onQueryChange: (value: string) => void;
}

export default function Header({ query, onQueryChange }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="site-header__brand" href={import.meta.env.BASE_URL}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="6"
              fill="var(--accent)"
            />
            <path d="M10 8.5v7l6-3.5-6-3.5z" fill="#111" />
          </svg>
          <span className="site-header__name">
            Movie<span className="site-header__accent">Explorer</span>
          </span>
        </a>
        <SearchBar value={query} onChange={onQueryChange}></SearchBar>
      </div>
    </header>
  );
}
