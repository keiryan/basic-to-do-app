export interface HandleInputProps {
  target: {
    value: string;
  };
}

export interface AddTaskProps {
  addTask: any;
}

export interface InitialAddTaskStateProps {
  handleOpen: () => void;
}

interface Task {
  title: string;
  description: string;
  key: number;
}

export interface ExpandedAddTaskStateProps {
  handleClose: () => void;
  addTask: (task: Task) => void;
}
