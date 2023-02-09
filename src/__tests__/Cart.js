import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Cart from '../pages/Cart';

jest.mock('../components/CartItem', () => ({ product }) => (
  <div data-testid="cartItem">{product.title}</div>
));

// setup props
const cart = [
  { title: 'apples', price: 1, quantity: 3 },
  { title: 'bread', price: 2, quantity: 1 },
];

describe('Cart Page Component', () => {
  it('Displays page heading', () => {
    render(<Cart cart={cart} />);
    const heading = screen.getByRole('heading', {
      level: 2,
      name: 'Your Cart',
    });
    expect(heading).toBeInTheDocument();
  });

  it('Renders items in the cart array', () => {
    render(<Cart cart={cart} />);
    const cartItems = screen.queryAllByTestId('cartItem');
    expect(cartItems.length).toBe(2);
  });

  it('Does not render any items when the cart is empty', () => {
    render(<Cart cart={[]} />);
    const cartItems = screen.queryAllByTestId('cartItem');
    expect(cartItems.length).toBe(0);
  });

  it('Displays total cost of items in the cart', () => {
    render(<Cart cart={cart} />);
    const total = screen.getByTestId('total-test');
    expect(total.textContent).toBe('Total: 5.00');
  });
});
