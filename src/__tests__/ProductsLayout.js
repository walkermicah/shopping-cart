import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import ProductsLayout from '../layouts/ProductsLayout';

describe('Products Layout Component', () => {
  it('Renders products layout navigation', () => {
    const { container } = render(<ProductsLayout />, {
      wrapper: BrowserRouter,
    });
    expect(container).toMatchSnapshot();
  });
});
