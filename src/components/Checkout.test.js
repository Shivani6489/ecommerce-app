import React from 'react';
import { render, screen } from '@testing-library/react';
import Checkout from './Checkout';

test('renders checkout form', () => {
  render(<Checkout />);
  
  expect(screen.getByText(/Checkout/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Name:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Address:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/City:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/State:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/ZIP Code:/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Payment Method:/i)).toBeInTheDocument();
});
