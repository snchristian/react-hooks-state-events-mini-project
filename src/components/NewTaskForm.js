import React, {useState} from "react";

function NewTaskForm({category, onTaskFormSubmit}) {
  
  const categories = category.filter(category => category !== "All").map((category)=>
    <option key={category}>
    {category}
    </option>)

  

  const[formData,formDataSetter]=useState({
    text:"",
    category:"Code"
  })

  function manageFormData(event){
    let text  = event.target.name
    let value= event.target.value
    formDataSetter({
      ...formData,[text]:value
    })
  }

  function handlesubmit(event){
    event.preventDefault();
    const newtask={
      key:formData.text,
      text:formData.text,
      category:formData.category
    }

    onTaskFormSubmit(newtask)
  }



  return (
    <form className="new-task-form" onSubmit={handlesubmit} >
      <label>
        Details
        <input type="text" name="text" onChange={manageFormData} value={formData.text} />
      </label>
      <label>
        Category
        <select name="category" onChange={manageFormData} value={formData.category}>
         {categories}
          {/* render <option> elements for each category here */}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
