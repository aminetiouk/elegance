import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

/* Rendering Tests */
test('renders the App without crashing', () => {
  render(<App />, { wrapper: MemoryRouter });
  const navElement = screen.getByRole('navigation');
  const footerElement = screen.getByTestId('footer');
  expect(navElement).toBeInTheDocument();
  expect(footerElement).toBeInTheDocument();
});

/* Lazy Loading and Suspense Tests */
test('displays loader while loading lazy components', () => {
  render(<App />, { wrapper: MemoryRouter });
  expect(screen.getByTestId('loader')).toBeInTheDocument();
});

/* Route Tests */
test('renders Home page for / route', () => {
  render(
    <MemoryRouter initialEntries={['/']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText('Home')).toBeInTheDocument();
});

test('renders Shop page for /shop route', () => {
  render(
    <MemoryRouter initialEntries={['/shop']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText('Shop')).toBeInTheDocument();
});

test('renders Product page for /shop/:id route', () => {
  render(
    <MemoryRouter initialEntries={['/shop/123']}>
      <App />
    </MemoryRouter>
  );
  expect(screen.getByText('Product Details')).toBeInTheDocument();
});

/** Navigation Tests */
test('navigates to /contact when Contact link is clicked', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const contactLink = screen.getByText(/Contact/i);
  userEvent.click(contactLink);
  expect(screen.getByText(/Contact Form/i)).toBeInTheDocument();
});