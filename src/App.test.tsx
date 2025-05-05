import { expect, test } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import App from './App';

test('toggles dark mode when button is clicked', async () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  expect(document.documentElement.classList.contains('dark')).toBe(false);

  await userEvent.click(screen.getByText('Dark Mode'));

  expect(document.documentElement.classList.contains('dark')).toBe(true);
  expect(screen.getByText('Light Mode')).toBeInTheDocument();

  await userEvent.click(screen.getByText('Light Mode'));
  expect(document.documentElement.classList.contains('dark')).toBe(false);
});
