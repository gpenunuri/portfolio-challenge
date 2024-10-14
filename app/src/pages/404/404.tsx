import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main>
      <div className="not-found">
        <h1 className="not-found__title">Page Not Found</h1>
        <Link to="/" className="not-found__link">
          Go to Homepage
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
