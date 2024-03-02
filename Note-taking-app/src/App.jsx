import React, { useState } from 'react';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddNote = () => {
    if (inputValue.trim() !== '') {
      setNotes([...notes, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  return (
    <div className="app">
      <h1>Simple Note Taking App  </h1> 
      <h2 align="center">📝📝📝</h2>
      <div className="note-input">
        <input
          type="text"
          placeholder="Enter your note"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button onClick={handleAddNote}>Add</button>
      </div>
      <ul className="note-list">
        {notes.map((note, index) => (
          <li key={index}>
            <span>{note}</span>
            <button onClick={() => handleDeleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
