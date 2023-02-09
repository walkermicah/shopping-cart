import { render } from '@testing-library/react';
import Contact from '../pages/Contact';

describe('Contact Page Component', () => {
  it('Renders contact form page', () => {
    const { container } = render(<Contact />);
    expect(container).toMatchSnapshot();
  });
});
