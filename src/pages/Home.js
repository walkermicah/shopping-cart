import { Link } from 'react-router-dom';
import '../styles/Home.scss';

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
