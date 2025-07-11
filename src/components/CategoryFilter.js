import React, {useState} from "react";

function CategoryFilter({categories, selected, onSelected}) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => {
        return(
          <button key={category} onClick={() => onSelected(category)} className={category === selected ? "selected" : ""}>{category} </button>
        );
      })}
    </div>
  );
}

export default CategoryFilter;
