import React, { useState } from 'react';
import './App.css';

const Todo = () => {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const addItem = () => {
    if (input) {
      if (isEditing) {
        const updatedItems = items.map((item, index) =>
          index === editIndex ? input : item
        );
        setItems(updatedItems);
        setIsEditing(false);
        setEditIndex(null);
      } else {
        setItems([...items, input]);
      }
      setInput("");
    }
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((item, i) => i !== index);
    setItems(updatedItems);
  };

  const editItem = (index) => {
    setInput(items[index]);
    setIsEditing(true);
    setEditIndex(index);
  };

  const deleteAllItems = () => {
    setItems([]);
  };

  return (
    <div className="container">
      <h1>TODO</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={addItem}>
        {isEditing ? "Update" : "Add"}
      </button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span>{item}</span>
            <button onClick={() => editItem(index)} className="btn btn-secondary">Edit</button>
            <button onClick={() => deleteItem(index)} className="btn btn-danger">Delete</button>
          </li>
        ))}
      </ul>
      {items.length > 0 && (
        <button onClick={deleteAllItems} className="delete-all-button">
          Delete All
        </button>
      )}
    </div>
  );
};

export default Todo;
