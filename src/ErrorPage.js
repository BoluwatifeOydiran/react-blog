import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h2> 404 : Error Page not found</h2>
      <Link to="/">Go back Homepage</Link>
    </div>
  );
};

export default ErrorPage;
