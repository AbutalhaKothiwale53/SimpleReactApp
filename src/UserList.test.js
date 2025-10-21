import React from 'react';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import UserList from './UserList';

afterEach(() => {
  cleanup();
  localStorage.removeItem('users');
});

test('shows empty state when no users', () => {
  render(<UserList />);
  // The component renders a row with "No users found."
  expect(screen.getByText(/No users found\./i)).toBeInTheDocument();
});

test('renders users from localStorage', () => {
  const data = [{ name: 'Alice' }, { name: 'Bob' }];
  localStorage.setItem('users', JSON.stringify(data));
  render(<UserList />);
  expect(screen.getByText('Alice')).toBeInTheDocument();
  expect(screen.getByText('Bob')).toBeInTheDocument();
});

test('delete button removes user and updates localStorage', () => {
  const data = [{ name: 'Alice' }, { name: 'Bob' }];
  localStorage.setItem('users', JSON.stringify(data));
  render(<UserList />);

  // click delete for first user (aria-label="delette-0")
  const delButton = screen.getByLabelText('delete-0');
  fireEvent.click(delButton);

  // Alice should be gone, Bob should remain
  expect(screen.queryByText('Alice')).not.toBeInTheDocument();
  expect(screen.getByText('Bob')).toBeInTheDocument();

  const stored = JSON.parse(localStorage.getItem('users') || '[]');
  expect(stored).toEqual([{ name: 'Bob' }]);
});
