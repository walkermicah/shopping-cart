import CartItem from '../components/CartItem';
import '../styles/pages/Cart.scss';

function Cart({ cart, cartMethods }) {
  return (
    <div className="Cart">
      <div className="Cart-items">
        <h2>Your Cart</h2>

        <div className="Cart-items-list">
          {cart.map((p) => (
            <CartItem
              key={p.id}
              product={p}
              cart={cart}
              cartMethods={cartMethods}
            />
          ))}
        </div>

        <div className="Cart-items-total">
          <p data-testid="total-test">
            Total:{' '}
            {cart
              .reduce(
                (total, product) => total + product.quantity * product.price,
                0
              )
              .toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
