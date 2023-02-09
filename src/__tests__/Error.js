import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  RouterProvider,
  createMemoryRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Error from '../pages/Error';

const mockUseRouteError = jest.fn();
const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useRouteError: () => mockUseRouteError,
  useNavigate: () => mockUseNavigate,
}));

describe('Error Page Component', () => {
  let router;

  beforeEach(() => {
    router = createMemoryRouter(
      createRoutesFromElements(<Route path="/" element={<Error />} />)
    );
  });

  it('Renders error page', () => {
    const { container } = render(<RouterProvider router={router} />);
    expect(container).toMatchSnapshot();
  });

  it('Calls useNavigate when back button is clicked', () => {
    render(<RouterProvider router={router} />);
    const backBtn = screen.getByRole('button', {
      name: 'Go back',
    });
    userEvent.click(backBtn);
    expect(mockUseNavigate).toHaveBeenCalled();
    expect(mockUseNavigate).toHaveBeenCalledWith(-1);
  });
});
