import React from "react";

function CategoryFilter({category,handleFilter,setSelected}) {

  const buttonsElments = category.map(category => <button
    className={category === setSelected ? "selected": ""}
    key={category}
    onClick={()=>handleFilter(category)}>
      {category}
    </button>
  )
 

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttonsElments}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
