import { Outlet, Link } from 'react-router-dom';
import '../styles/layouts/ProductsLayout.scss';

function ProductsLayout() {
  return (
    <div className="ProductsLayout">
      <nav>
        <ul>
          <li>
            <Link to="/products">All</Link>
          </li>

          <li>
            <Link to="produce">Produce</Link>
          </li>

          <li>
            <Link to="bakery">Bakery</Link>
          </li>

          <li>
            <Link to="dairy">Dairy/Eggs</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default ProductsLayout;
