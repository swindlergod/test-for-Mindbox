import React, { useState } from 'react';
import './App.css';
import NewTaskForm from '../New-task-form/new-task-form';
import TaskList from '../Task-list/task-list';
import Footer from '../Footer/footer';
import { TodoItem, FilterType } from '../../Types/todo-app';

export const tasksFilter = (todos: TodoItem[], filt: FilterType): TodoItem[] => {
  switch (filt) {
    case 'completedTasks':
      return todos.filter((element) => element.done === true);
    case 'Active':
      return todos.filter((element) => element.done === false);
    default:
      return todos;
  }
};

export const leftTodos = (data: TodoItem[]) => data.filter((todo) => todo.done === false).length;

const App: React.FC = () => {
  const [todoData, setTodoData] = useState<TodoItem[]>([]);
  const [filter, setFilter] = useState<FilterType>('allTasks');

  const addItem = (text: string): void => {
    const data: TodoItem = {
      id: Math.ceil(Math.random() * 100000),
      label: text,
      done: false,
    };
    const newArray = [...todoData, data];
    setTodoData(newArray);
  };

  const onToggleDone = (id: number, data: boolean): void => {
    const doneItem = todoData.map((element) => {
      if (id === element.id) element.done = data;
      return element;
    });
    setTodoData(doneItem);
  };

  const tasksCleaner = (): void => {
    const cleanedItems = todoData.filter((element) => !element.done);
    setTodoData(cleanedItems);
  };

  const filterChanger = (newFilter: FilterType): void => {
    setFilter(newFilter);
  };

  const filteredTodos = tasksFilter(todoData, filter);

  return (
    <div>
      <NewTaskForm onItemAdded={addItem} />
      <TaskList
        todos={filteredTodos}
        onToggleDone={onToggleDone}
      />
      <Footer filterChanger={filterChanger} tasksCleaner={tasksCleaner} todos={leftTodos(todoData)} filter={filter} />
    </div>
  );
};

export default App;
