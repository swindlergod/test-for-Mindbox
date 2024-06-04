import React from 'react';
import styled from 'styled-components';
import Task from '../Task/task';
import { TaskListProps } from '../../Types/todo-app';

const ListContainer = styled.section`
  margin: 0 auto;
  width: 100%;
`;

const TodoList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const TaskList: React.FC<TaskListProps> = ({ todos, onToggleDone }) => {
  return (
    <ListContainer>
      <TodoList>
        {todos.map((todo) => (
          <Task key={todo.id} onToggleDone={onToggleDone} todo={todo} />
        ))}
      </TodoList>
    </ListContainer>
  );
};

export default TaskList;
