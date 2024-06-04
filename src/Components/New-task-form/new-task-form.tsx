import React, { useState, ChangeEvent, FormEvent } from 'react';
import styled from 'styled-components';
import { NewTaskFormProps } from '../../Types/todo-app';

const Header = styled.header`
  text-align: center;
`;

const HeaderTitle = styled.h1`
  width: 100%;
  font-size: 80px;
  font-weight: 100;
  text-align: center;
  color: rgba(175, 47, 47, 0.15);
`;

const NewTodoForm = styled.form`
  display: flex;
  margin-bottom: 0;
`;

const NewTodoInput = styled.input`
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  line-height: 1.4em;
  border: none;
  padding: 16px 60px;
  background: white;
  border-bottom: 1px solid #ededed;

  &:focus {
    outline: none;
  }

  &::placeholder {
    opacity: 0.5;
  }
`;

const HiddenButton = styled.button`
  display: none;
`;

const NewTaskForm: React.FC<NewTaskFormProps> = ({ onItemAdded }) => {
  const [label, setLabel] = useState<string>('');

  const onLabelChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const newLabel = e.target.value;
    setLabel(newLabel);
  };

  const onSubmit = (e: FormEvent): void => {
    e.preventDefault();
    onItemAdded(label);
    setLabel('');
  };

  return (
    <Header>
      <HeaderTitle>todos</HeaderTitle>
      <NewTodoForm onSubmit={onSubmit} role='form'>
        <NewTodoInput
          placeholder="What needs to be done?"
          onChange={onLabelChange}
          value={label}
        />
        <HiddenButton type="submit" aria-label="123" />
      </NewTodoForm>
    </Header>
  );
};

export default NewTaskForm;
