import "../styles/StatusMessage.css";

interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
}

export default function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="status-message" role="alert">
      <h2 className="status-message__title">Oops...Something went wrong</h2>
      <p>{message}</p>
      <button className="status-message__button" onClick={onRetry}>
        Try again
      </button>
    </div>
  );
}
