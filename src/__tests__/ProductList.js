import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductList from '../components/ProductList';
import productData from '../data/productData';

let mockReturn = '';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    productType: mockReturn,
  }),
}));

jest.mock('../components/Product', () => () => (
  <div data-testid="product"></div>
));

describe('Product List Component', () => {
  beforeEach(() => {
    mockReturn = '';
  });

  it('displays all products if there is no product type in URL', () => {
    render(<ProductList />);
    const products = screen.getAllByTestId('product');
    const nProducts = productData.length;
    expect(products.length).toBe(nProducts);
  });

  it('displays products by category if there is a product type in the URL', () => {
    mockReturn = 'bakery';
    render(<ProductList />);
    const products = screen.getAllByTestId('product');
    const nProducts = productData.filter((p) => p.category === 'bakery').length;
    expect(products.length).toBe(nProducts);
  });

  it('Throws an error if product type in URL is invalid', () => {
    mockReturn = 'invalid-category';
    expect(() => render(<ProductList />)).toThrow();
  });
});
