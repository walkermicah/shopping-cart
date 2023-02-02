import { useRouteError, useNavigate } from 'react-router-dom';
import '../styles/pages/Error.scss';

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="Error">
      <div className="Error-message">
        <h3>Error!</h3>
        <p>Page could not be found.</p>
        <p>{error.message}</p>
        <button onClick={() => navigate(-1)}>Go back</button>
      </div>
    </div>
  );
}

export default Error;
