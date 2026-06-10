import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the comment app', () => {
  const { getByText } = render(<App />);
  const element = getByText(/Brad/i);
  expect(element).toBeInTheDocument();
});
