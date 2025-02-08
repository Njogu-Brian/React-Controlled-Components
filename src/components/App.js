import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import ItemForm from "./ItemForm";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [items, setItems] = useState(itemData);
  const [searchText, setSearchText] = useState("");

  function onDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  function handleSearchChange(search) {
    setSearchText(search);
  }

  function handleItemFormSubmit(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <ShoppingList 
        items={items} 
        searchText={searchText} 
        onSearchChange={handleSearchChange} 
      />
    </div>
  );
}

export default App;
