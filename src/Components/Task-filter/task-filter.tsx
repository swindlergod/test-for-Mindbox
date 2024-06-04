import React from 'react';
import styled, { css } from 'styled-components';
import { TaskFilterProps, FilterType } from '../../Types/todo-app';

const Filters = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  right: 0;
  left: 0;
`;

const FilterItem = styled.li`
  display: inline;
  cursor: default;
`;

const FilterButton = styled.button<{ selected: boolean }>`
  display: inline-block;
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
  cursor: pointer;

  ${({ selected }) =>
    selected &&
    css`
      border-color: rgba(175, 47, 47, 0.2);
    `}

  &:hover {
    border-color: rgba(175, 47, 47, 0.1);
  }

  ${({ selected }) =>
    !selected &&
    css`
      cursor: pointer;
    `}
`;

const TaskFilter: React.FC<TaskFilterProps> = ({ filter, filterChanger }) => {
  const buttons = [
    {
      name: 'All',
      filter: 'allTasks' as FilterType,
      key: 1,
    },
    {
      name: 'Active',
      filter: 'Active' as FilterType,
      key: 2,
    },
    {
      name: 'Completed',
      filter: 'completedTasks' as FilterType,
      key: 3,
    },
  ];

  return (
    <Filters>
      {buttons.map((button) => (
        <FilterItem key={button.key}>
          <FilterButton
            type="button"
            onClick={() => filterChanger(button.filter)}
            selected={filter === button.filter}
          >
            {button.name}
          </FilterButton>
        </FilterItem>
      ))}
    </Filters>
  );
};

export default TaskFilter;
