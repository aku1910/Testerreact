import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from '../src/ToDoList';

test('renders TodoList component', () => {
  const { getByText, getByPlaceholderText } = render(<TodoList />);

  expect(getByText('Todo List')).toBeInTheDocument();
  expect(getByPlaceholderText('Enter a todo')).toBeInTheDocument();
  expect(getByText('Add Todo')).toBeInTheDocument();
});

test('adds todo when Add Todo button is clicked', () => {
  const { getByText, getByPlaceholderText } = render(<TodoList />);

  const input = getByPlaceholderText('Enter a todo');
  const addButton = getByText('Add Todo');

  fireEvent.change(input, { target: { value: 'Test Todo' } });
  fireEvent.click(addButton);

  expect(getByText('Test Todo')).toBeInTheDocument();
});