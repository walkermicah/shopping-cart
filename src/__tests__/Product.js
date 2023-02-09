import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Product from '../components/Product';
import watermelon from '../img/products/watermelon.png';

jest.mock('../components/UpdateCart', () => () => (
  <div data-testid="update-cart"></div>
));

const testProduct = {
  title: 'Watermelon',
  imgUrl: watermelon,
  id: 'watermelon',
  category: 'produce',
  price: 10,
  unit: 'each',
};

describe('Product Component', () => {
  it('Renders product details', () => {
    render(
      <Product product={testProduct} linksActive={false} showAll={false} />
    );
    const title = screen.getByRole('heading', { level: 4 });
    const image = screen.getByRole('img');
    const pricePerUnit = screen.getByTestId('product-price');
    expect(title).toHaveTextContent('Watermelon');
    expect(image).toHaveAttribute('src', watermelon);
    expect(pricePerUnit).toHaveTextContent('$10.00 each');
  });

  it('Renders an UpdateCart component', () => {
    render(
      <Product product={testProduct} linksActive={false} showAll={false} />
    );
    const UpdateCart = screen.getByTestId('update-cart');
    expect(UpdateCart).toBeInTheDocument();
  });

  it('Does not render link when linksActive prop is false', () => {
    render(
      <Product product={testProduct} linksActive={false} showAll={false} />
    );
    const link = screen.queryByRole('link');
    expect(link).not.toBeInTheDocument();
  });

  it('Renders title and image as a link when linksActive prop is true', () => {
    render(
      <Product product={testProduct} linksActive={true} showAll={false} />,
      { wrapper: BrowserRouter }
    );
    const link = screen.getByRole('link');
    expect(link).toBeInTheDocument();
  });

  it('Links to full URL from the `all products` page', () => {
    render(
      <Product product={testProduct} linksActive={true} showAll={true} />,
      { wrapper: BrowserRouter }
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute(
      'href',
      `/${testProduct.category}/${testProduct.id}`
    );
  });

  it('Links to partial URL from a product category page', () => {
    render(
      <Product product={testProduct} linksActive={true} showAll={false} />,
      { wrapper: BrowserRouter }
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', `/${testProduct.id}`);
  });
});
