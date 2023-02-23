import React, { useState } from "react";
import { ListContainer } from "./styles.list";
import ListItem from "../List Item/listitem";
import AddTask from "../Add Task/addtask";
import { TaskProps } from "./interfaces.list";

// Title: List
// Description: This is a list of items
// Priority
// Due Date?
// Comments
// Status
// Color

export default function List(): JSX.Element {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  const addTask = (task: TaskProps): void => {
    setTasks([...tasks, task]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, task]));
  };

  return (
    <ListContainer>
      {tasks.map((currentTask: TaskProps) => {
        return <ListItem key={currentTask.key} task={currentTask} />;
      })}
      <AddTask addTask={addTask} />
    </ListContainer>
  );
}
