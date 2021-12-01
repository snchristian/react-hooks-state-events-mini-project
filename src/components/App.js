import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import { useState } from "react";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks,setTask]=useState(TASKS)
  const [useselected,setCat]= useState('All')

  
  function onTaskFormSubmit(newTask){
    const newTaskArray=[...tasks,newTask]

    setTask(newTaskArray)
  }

  function handlesDelete(element){
    const newTask= tasks.filter((task)=> task.text !== element);
    setTask(newTask)
  }

  function handleFilter(event){  
    setCat(event)
  }

const displayTask = tasks.filter(task => {
   if(useselected === "All"){
     return true
   }
   else{
      return task.category === useselected 
   }
});
 
  


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter category={CATEGORIES} setSelected={useselected} handleFilter={handleFilter}/>
      <NewTaskForm category={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={displayTask} handlesDelete={handlesDelete} />
    </div>
  );
}

export default App;
