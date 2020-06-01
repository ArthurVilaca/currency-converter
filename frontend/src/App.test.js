import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders currency converter link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/currency converter/i);
  expect(linkElement).toBeInTheDocument();
});
