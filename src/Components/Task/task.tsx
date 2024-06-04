import React from 'react';
import styled from 'styled-components';
import { TaskProps } from '../../Types/todo-app';

const ListItem = styled.li`
  position: relative;
  font-size: 24px;
  border-bottom: 1px solid #ededed;
  background-color: white;

  &:last-child {
    border-bottom: none;
  }
`;

const ToggleInput = styled.input`
  text-align: center;
  width: 40px;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border: none;
  cursor: pointer;
  opacity: 0;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 85px 15px 60px;
  word-break: break-all;
  line-height: 1.2;
  transition: color 0.4s;
  font-weight: 400;
  color: #4d4d4d;
  text-decoration: none;

  &.completed {
    color: #cdcdcd;
    text-decoration: line-through;
  }

  ${ToggleInput}:checked + & {
    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
  }

  ${ToggleInput} + & {
    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
    background-repeat: no-repeat;
    background-position: center left;
  }
`;

const Task: React.FC<TaskProps> = ({ onToggleDone, todo }) => {
  const handleToggleDone = (e: React.ChangeEvent<HTMLInputElement>) => {
    onToggleDone(todo.id, e.target.checked);
  };

  return (
    <ListItem>
      <div className="view">
        <ToggleInput
          id={todo.id.toString()}
          className="toggle"
          type="checkbox"
          checked={todo.done}
          onChange={handleToggleDone}
        />
        <Label htmlFor={todo.id.toString()} data-testid="task-container" className={todo.done ? 'completed' : ''}>
          <span className="title">{todo.label}</span>
        </Label>
      </div>
    </ListItem>
  );
};

export default Task;
