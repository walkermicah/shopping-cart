import UpdateCart from './UpdateCart';
import productData from '../data/productData';
import '../styles/components/CartItem.scss';

function CartItem({ product, cart, cartMethods }) {
  return (
    <div className="Cart-item" key={product.id}>
      <img
        src={productData.find((pr) => pr.id === product.id).imgUrl}
        alt={product.id}
      />
      <p className="Cart-item-title" data-testid="cartItem-title">
        {' '}
        {product.title}
      </p>
      <UpdateCart product={product} cart={cart} cartMethods={cartMethods} />
      <p className="Cart-item-price" data-testid="cartItem-price">
        {' '}
        ${product.price} each
      </p>
      <p className="Cart-item-total" data-testid="cartItem-total">
        {' '}
        ${(product.price * product.quantity).toFixed(2)}
      </p>
    </div>
  );
}

export default CartItem;
