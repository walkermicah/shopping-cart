import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

describe('Home Page Component', () => {
  it('Renders h2 with title', () => {
    render(<Home />, { wrapper: BrowserRouter });
    const title = screen.getByRole('heading', {
      level: 2,
      name: 'Organic groceries on demand.',
    });
    expect(title).toBeInTheDocument();
  });

  it('Renders a link to products page', () => {
    render(<Home />, { wrapper: BrowserRouter });
    const link = screen.getByRole('link', {
      name: 'Shop Now',
    });
    expect(link).toBeInTheDocument();
  });
});
