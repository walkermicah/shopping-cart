import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import RootLayout from '../layouts/RootLayout';

describe('Root Layout Component', () => {
  it('Renders root layout header and main', () => {
    const { container } = render(<RootLayout />, { wrapper: BrowserRouter });
    expect(container).toMatchSnapshot();
  });

  it('Displays number of items in cart', () => {
    render(<RootLayout nItems={5} />, { wrapper: BrowserRouter });
    const span = screen.getByTestId('n-items');
    expect(+span.textContent).toBe(5);
  });
});
