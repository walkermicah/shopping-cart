import { Link } from 'react-router-dom';
import '../styles/pages/Home.scss';

function Home() {
  return (
    <div className="Home">
      <div className="Home-banner">
        <h2>Organic groceries on demand.</h2>
        <Link to="products">Shop Now</Link>
      </div>
    </div>
  );
}

export default Home;
