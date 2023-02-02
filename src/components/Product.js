import { Link } from 'react-router-dom';
import '../styles/components/Product.scss';
import UpdateCart from './UpdateCart';

function Product({ product, linksActive }) {
  const title = <h4>{product.title}</h4>;
  const img = <img src={product.imgUrl} alt={product.title} />;

  return (
    <div className="Product">
      {linksActive ? (
        <Link to={product.id}>
          {title}
          {img}
        </Link>
      ) : (
        <div>
          {title}
          {img}
        </div>
      )}

      <p>
        ${product.price.toFixed(2)} {product.unit}
      </p>
      <UpdateCart quantity={product.quantity} />
    </div>
  );
}

export default Product;
