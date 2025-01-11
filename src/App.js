import React, { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]); // State for list items
  const [inputValue, setInputValue] = useState(""); // State for input field

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      setItems([...items, inputValue]); // Add new item to the list
      setInputValue(""); // Clear the input field
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Item List Manager</h1>
      </header>
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
