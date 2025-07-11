import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const[selected, setSelectedCategory] = useState('All');
  const[allTasks, setallTasks] = useState(TASKS);


  const tasksToDisplay = allTasks.filter((task) => {
    if (selected === "All") return true;

    return task.category === selected;
  })

  function handleSelected(category) {
    return(setSelectedCategory(category));
  }

  function handleNewTaskFormSubmit(added) {
    setallTasks([...allTasks, added]);
  }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selected={selected} onSelected={handleSelected}/>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleNewTaskFormSubmit}/>
      <TaskList tasks={tasksToDisplay}/>
    </div>
  );
}

export default App;
