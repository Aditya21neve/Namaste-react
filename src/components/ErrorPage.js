import { Link } from "react-router";
import { useRouteError } from "react-router";
import "./NotFound.css"; // Import the CSS for styling

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="notfound-container">
      <div className="notfound">
        <h1 className="notfound-title">{err.status}</h1>
        <p className="notfound-message">Oops! </p>
        <p className="notfound-message">{err.statusText}</p>
        <Link to="/" className="notfound-link">
          Go back to Homepage
        </Link>
      </div>
    </div>
  );
};
export default ErrorPage;
