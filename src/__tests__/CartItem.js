import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CartItem from '../components/CartItem';
import watermelon from '../img/products/watermelon.png';

jest.mock('../components/UpdateCart', () => () => (
  <div data-testid="update-cart"></div>
));

const testProduct = {
  title: 'Watermelon',
  imgUrl: watermelon,
  id: 'watermelon',
  category: 'produce',
  price: Number(10).toFixed(2),
  quantity: 2,
  unit: 'each',
};

describe('Cart Item Component', () => {
  it('Renders product details', () => {
    render(<CartItem product={testProduct} />);
    const title = screen.getByTestId('cartItem-title');
    const image = screen.getByRole('img');
    const pricePerUnit = screen.getByTestId('cartItem-price');
    const totalPrice = screen.getByTestId('cartItem-total');
    expect(title).toHaveTextContent('Watermelon');
    expect(image).toHaveAttribute('src', watermelon);
    expect(pricePerUnit).toHaveTextContent('$10.00 each');
    expect(totalPrice).toHaveTextContent('$20.00');
  });

  it('Renders an UpdateCart component', () => {
    render(<CartItem product={testProduct} />);
    const UpdateCart = screen.getByTestId('update-cart');
    expect(UpdateCart).toBeInTheDocument();
  });
});
