import { test, expect, vi, describe, beforeEach } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ModeButton from '.';

describe('ModeButton', () => {
  let mockToggleDarkMode: () => void;

  beforeEach(() => {
    mockToggleDarkMode = vi.fn();
  });

  test('Button text should be "Dark Mode" when isDarkMode is false', () => {
    render(
      <ModeButton isDarkMode={false} toggleDarkMode={mockToggleDarkMode} />
    );
    expect(screen.getByText('Dark Mode')).toBeInTheDocument();
  });

  test('Button text should be "Light Mode" when isDarkMode is ture', () => {
    render(
      <ModeButton isDarkMode={true} toggleDarkMode={mockToggleDarkMode} />
    );
    expect(screen.getByText('Light Mode')).toBeInTheDocument();
  });

  test('Button should call toggleDarkMode when clicked', async () => {
    const user = userEvent.setup();
    render(
      <ModeButton isDarkMode={false} toggleDarkMode={mockToggleDarkMode} />
    );
    const button = screen.getByRole('button');
    await user.click(button);
    expect(mockToggleDarkMode).toHaveBeenCalledTimes(1);
  });
});
