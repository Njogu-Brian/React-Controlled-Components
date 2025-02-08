import React from "react";

function Filter({ selectedCategory, onCategoryChange, searchText, onSearchChange }) {
  function handleSearchInput(event) {
    onSearchChange(event.target.value);
  }

  return (
    <div className="Filter">
      <input 
        type="text" 
        placeholder="Search..." 
        value={searchText} 
        onChange={handleSearchInput} 
      />
      <select name="filter" value={selectedCategory} onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
