export interface TodoItem {
    id: number;
    label: string;
    done: boolean;
  }
  
export type FilterType = 'allTasks' | 'completedTasks' | 'Active';

export interface FooterProps {
    filterChanger: (filter: FilterType) => void;
    tasksCleaner: () => void;
    todos: number;
    filter: FilterType;
  }

export interface NewTaskFormProps {
    onItemAdded: (label: string) => void;
  }

export interface TaskProps {
    onToggleDone: (id: number, done: boolean) => void;
    todo: TodoItem;
  }

export interface TaskFilterProps {
    filter: FilterType;
    filterChanger: (filter: FilterType) => void;
  }

export interface TaskListProps {
    todos: TodoItem[];
    onToggleDone: (id: number, done: boolean) => void;
  }