import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from '../components/Counter';

test('renders the Counter component', () => {
  render(<Counter />);
  const counterElement = screen.getByText(/Counter App/i);
  expect(counterElement).toBeInTheDocument();
});

test('increments the count when the increment button is clicked', () => {
  render(<Counter />);
  const incrementButton = screen.getByRole('button', { name: /increment/i });
  const countElement = screen.getByText('0');

  fireEvent.click(incrementButton);
  expect(countElement).toHaveTextContent('1');
});

test('decrements the count when the decrement button is clicked', () => {
  render(<Counter />);
  const decrementButton = screen.getByRole('button', { name: /decrement/i });
  const countElement = screen.getByText('0');

  fireEvent.click(decrementButton);
  expect(countElement).toHaveTextContent('0');
});

test('resets the count when the reset button is clicked', () => {
  render(<Counter />);
  const incrementButton = screen.getByRole('button', { name: /increment/i });
  const resetButton = screen.getByRole('button', { name: /reset/i });
  const countElement = screen.getByText('0');

  fireEvent.click(incrementButton);
  fireEvent.click(resetButton);
  expect(countElement).toHaveTextContent('0');
});
