import React, {useState} from "react";
import Task from "./Task";

function TaskList({tasks}) {
  const [deleted, setDeleted] = useState('');

  function handleDelete() {
    setDeleted(tasks.splice(deleted,1));
  }

  return (
    <div className="tasks">
      {tasks.map((task, index) => {
        return(
          <Task 
            key={index}
            text={task.text}
            category={task.category}
            onDelete={handleDelete}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
