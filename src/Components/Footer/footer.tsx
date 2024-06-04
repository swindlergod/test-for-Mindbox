import React from 'react';
import styled from 'styled-components';
import TaskFilter from '../Task-filter/task-filter';
import { FooterProps } from '../../Types/todo-app';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  font-size: 15px;
  border-top: 1px solid #e6e6e6;
  color: gray;
  background: white;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    z-index: -1;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow:
      0 1px 1px rgba(0, 0, 0, 0.2),
      0 8px 0 -3px #f6f6f6,
      0 9px 1px -3px rgba(0, 0, 0, 0.2),
      0 16px 0 -6px #f6f6f6,
      0 17px 2px -6px rgba(0, 0, 0, 0.2);
  }
`;

const TodoCount = styled.span`
  text-align: left;
  font-weight: 300;
`;

const ClearCompletedButton = styled.button`
  cursor: pointer;
  color: gray;
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
`;

const Footer: React.FC<FooterProps> = ({ filterChanger, tasksCleaner, todos, filter }) => {
  return (
    <FooterContainer>
      <TodoCount>{todos} items left</TodoCount>
      <TaskFilter filter={filter} filterChanger={filterChanger} />
      <ClearCompletedButton type="button" onClick={tasksCleaner}>
        Clear completed
      </ClearCompletedButton>
    </FooterContainer>
  );
};

export default Footer;

