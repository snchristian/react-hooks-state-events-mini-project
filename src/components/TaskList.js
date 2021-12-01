import React from "react";
import Task from "./Task"

function TaskList({ handlesDelete,tasks}) {
  
  const updateTask = tasks.map((task)=>{
         return <Task 
        key={task.text}
        text={task.text}
        category={task.category}
        handlesDelete={handlesDelete}
        
        />
      })
  
  
  return (
    <div className="tasks">
      
      {updateTask}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
