import { render, screen } from '@testing-library/react';
import App from './App';

test('renders heading Galeri Foto', () => {
  render(<App />);
  const headingElement = screen.getByText(/Galeri Foto/i);
  expect(headingElement).toBeInTheDocument();
});
