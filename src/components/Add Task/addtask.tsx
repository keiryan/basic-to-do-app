import React, { useState } from "react";
import {
  AddTaskClosed,
  AddTaskExpanded,
  PlusContainer,
  Plus,
  AddTaskClosedLabel,
  InputField,
  CancelButton,
  SubmitButton,
  ButtonContainer,
} from "./styles.addtask";
import {
  HandleInputProps,
  AddTaskProps,
  InitialAddTaskStateProps,
  ExpandedAddTaskStateProps,
} from "./interfaces.addtask";

const InitialAddTaskState = ({ handleOpen }: InitialAddTaskStateProps) => {
  return (
    <AddTaskClosed onClick={handleOpen}>
      <PlusContainer>
        <Plus />
      </PlusContainer>
      <AddTaskClosedLabel>Add Task</AddTaskClosedLabel>
    </AddTaskClosed>
  );
};

const ExpandedAddTaskState = ({
  handleClose,
  addTask,
}: ExpandedAddTaskStateProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = ({ target }: HandleInputProps) => {
    setTitle(target.value);
  };

  const handleDescriptionChange = ({ target }: HandleInputProps) => {
    setDescription(target.value);
  };

  const handleSubmit = () => {
    addTask({ title, description, key: Math.random() });
    handleClose();
  };

  const passesChecks = () => {
    if (title.length > 0 && description.length > 0) {
      if (title.trim() && description.trim()) {
        return true;
      }
    }
    return false;
  };

  return (
    <AddTaskExpanded>
      <InputField
        placeholder="Title"
        bold={{ bold: true }}
        onChange={handleTitleChange}
      />
      <InputField
        placeholder="Description"
        onChange={handleDescriptionChange}
      />
      <ButtonContainer>
        <CancelButton onClick={handleClose}>Cancel</CancelButton>
        <SubmitButton passesChecks={passesChecks} onClick={handleSubmit}>
          Add Task
        </SubmitButton>
      </ButtonContainer>
    </AddTaskExpanded>
  );
};

export default function AddTask({ addTask }: AddTaskProps): JSX.Element {
  const [addingTask, setAddingTask] = useState(false);

  const handleOpen = () => {
    setAddingTask(true);
  };

  const handleClose = () => {
    setAddingTask(false);
  };

  const AddingTaskInterface = () =>
    addingTask ? (
      <ExpandedAddTaskState handleClose={handleClose} addTask={addTask} />
    ) : (
      <InitialAddTaskState handleOpen={handleOpen} />
    );
  return <AddingTaskInterface />;
}
