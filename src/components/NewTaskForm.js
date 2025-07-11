import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const[text, setText] = useState('');
  const[category, setCategory] = useState('Code');

  function handleTaskAddition(e) {
    e.preventDefault();

    const newTask = {
      text,
      category
    };

    onTaskFormSubmit(newTask);

    setText('');
    setCategory('Code');
  }
  
  return (
    <form className="new-task-form" onSubmit={handleTaskAddition}>
      <label>
        Details
        <input type="text" name="text" onChange={(e) => {setText(e.target.value)}} value={text}/>
      </label>
      <label>
        Category
        <select name="category" onChange={(e) => {setCategory(e.target.value)}} value={category}>
          {categories.map((category, index) => {
            if (category != 'All') {
              return(
                <option key={index}>{category}</option>
              );
            }
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
