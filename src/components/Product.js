import { Link } from 'react-router-dom';
import '../styles/components/Product.scss';
import UpdateCart from './UpdateCart';

function Product({ product, linksActive, showAll, cart, cartMethods }) {
  const title = <h4>{product.title}</h4>;
  const img = <img src={product.imgUrl} alt={product.id} />;

  const fullUrl = `${product.category}/${product.id}`;
  const partialUrl = product.id;

  return (
    <div className="Product">
      {linksActive ? (
        <Link to={showAll ? fullUrl : partialUrl}>
          {title}
          {img}
        </Link>
      ) : (
        <div>
          {title}
          {img}
        </div>
      )}

      <p data-testid="product-price">
        ${product.price.toFixed(2)} {product.unit}
      </p>
      <UpdateCart product={product} cart={cart} cartMethods={cartMethods} />
    </div>
  );
}

export default Product;
