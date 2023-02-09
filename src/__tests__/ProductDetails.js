import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductDetails from '../components/ProductDetails';

let mockReturn = '';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    productID: mockReturn,
  }),
}));

jest.mock('../components/Product', () => ({ product }) => (
  <div data-testid="test-product">{product.id}</div>
));

describe('Product Details Component', () => {
  beforeEach(() => {
    mockReturn = '';
  });

  it('Renders Product whose ID matches the ID in the URL', () => {
    mockReturn = 'milk';
    render(<ProductDetails />);
    const testProduct = screen.getByTestId('test-product');
    expect(testProduct).toHaveTextContent('milk');
  });

  it('Throws an error if URL ID does not match any products', () => {
    mockReturn = 'invalid-product';
    expect(() => render(<ProductDetails />)).toThrow();
  });
});
