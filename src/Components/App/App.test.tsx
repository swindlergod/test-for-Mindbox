import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import TaskFilter from '../Task-filter/task-filter';
import { tasksFilter, leftTodos } from './App';

// Проверяем, добавляется ли новая тудушка, при отправке формы

test('добавление new todo', () => {
  render(<App />);

  const input = screen.getByPlaceholderText('What needs to be done?');

  fireEvent.change(input, { target: { value: 'new todo' } });
  fireEvent.submit(input);

  const addedTask = screen.getByText('new todo');
  expect(addedTask).toBeInTheDocument();
});

// Проверяем, отмечается ли тудушка, как выполненная

test('отмечаем todo как выполненное', () => {
  render(<App />);

  const input = screen.getByPlaceholderText('What needs to be done?');
  fireEvent.change(input, { target: { value: 'new todo' } });
  fireEvent.submit(input);

  const addedTask = screen.getByText('new todo');
  fireEvent.click(addedTask);

  const taskContainer = screen.getByTestId('task-container');
  expect(taskContainer).toHaveClass('completed');
});

// Проверяем, очищается ли список выполненных тудушек при клике Clear completed.

test('очистка выполненных todo', () => {
    render(<App />);
  
    const input1 = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(input1, { target: { value: 'todo 1' } });
    fireEvent.submit(input1);
  
    const input2 = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(input2, { target: { value: 'todo 2' } });
    fireEvent.submit(input2);

    const input3 = screen.getByPlaceholderText('What needs to be done?');
    fireEvent.change(input3, { target: { value: 'todo 3' } });
    fireEvent.submit(input3);
  
    const addedTask1 = screen.getByText('todo 1');
    fireEvent.click(addedTask1);
  
    const addedTask2 = screen.getByText('todo 2');
    fireEvent.click(addedTask2);
  
    const clearCompletedButton = screen.getByText('Clear completed');
    fireEvent.click(clearCompletedButton);
  
    const tasks = screen.queryAllByTestId('task-container');
    expect(tasks.length).toBe(1);
  });


// Проверяем, как отрабатывают фильтры при клике по ним

  test('изменение фильтра', () => {

    const mockFilterChanger = jest.fn();
    
    render(<TaskFilter filter="allTasks" filterChanger={mockFilterChanger} />);
  
    const activeFilterButton = screen.getByText('Completed');
    fireEvent.click(activeFilterButton);
  
    expect(mockFilterChanger).toHaveBeenCalledWith('completedTasks');
  });


// Проверяем корректность фильтрации

  test('tasksFilter правильно фильтрует список дел', () => {
    const todos = [
      { id: 1, label: 'Task 1', done: true },
      { id: 2, label: 'Task 2', done: false },
      { id: 3, label: 'Task 3', done: true },
      { id: 4, label: 'Task 4', done: false },
      { id: 5, label: 'Task 5', done: false },
    ];
  
    const filteredCompleted = tasksFilter(todos, 'completedTasks');
    expect(filteredCompleted).toEqual([
      { id: 1, label: 'Task 1', done: true },
      { id: 3, label: 'Task 3', done: true },
    ]);
  
    const filteredActive = tasksFilter(todos, 'Active');
    expect(filteredActive).toEqual([
      { id: 2, label: 'Task 2', done: false },
      { id: 4, label: 'Task 4', done: false },
      { id: 5, label: 'Task 5', done: false },
    ]);
  
    const filteredAll = tasksFilter(todos, 'allTasks');
    expect(filteredAll).toEqual([
      { id: 1, label: 'Task 1', done: true },
      { id: 2, label: 'Task 2', done: false },
      { id: 3, label: 'Task 3', done: true },
      { id: 4, label: 'Task 4', done: false },
      { id: 5, label: 'Task 5', done: false },
    ]);
  });

// Проверяем корректность подсчета количества оставшихся дел (items left)

  test('leftTodos правильно вычисляет количество оставшихся невыполненных дел', () => {
    const todos = [
      { id: 1, label: 'Task 1', done: true },
      { id: 2, label: 'Task 2', done: false },
      { id: 3, label: 'Task 3', done: true },
      { id: 4, label: 'Task 4', done: true },
    ];
  
    const remainingTodos = leftTodos(todos);
  
    expect(remainingTodos).toBe(1);
  });