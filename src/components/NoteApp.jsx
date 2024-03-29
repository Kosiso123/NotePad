import React, { useState } from 'react';
import { useNoteStore } from '../store';
import './NoteApp.css';

function NoteApp() {
  const { note, updateNote, addImage, addVideo, addGif, formatting, toggleBold, toggleItalic, toggleUnderline } = useNoteStore();
  const [todos, setTodos] = useState([]);

  const handleInputChange = (event) => {
    updateNote(event.target.value);
  };

  const handleAddImage = () => {
    const imageUrl = prompt('Enter image URL:');
    if (imageUrl) {
      addImage(imageUrl);
    }
  };

  const handleAddVideo = () => {
    const videoUrl = prompt('Enter video URL:');
    if (videoUrl) {
      addVideo(videoUrl);
    }
  };

  const handleAddGif = () => {
    const gifUrl = prompt('Enter GIF URL:');
    if (gifUrl) {
      addGif(gifUrl);
    }
  };

  const handleSave = () => {
    if (note.trim() !== '') {
      setTodos([...todos, note]);
      updateNote('');
    }
  };

  const handleDelete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="note-app">
      <div className="toolbar">
        <button onClick={toggleBold} className={formatting.bold ? 'active' : ''}><b>B</b></button>
        <button onClick={toggleItalic} className={formatting.italic ? 'active' : ''}><i>I</i></button>
        <button onClick={toggleUnderline} className={formatting.underline ? 'active' : ''}><u>U</u></button>
        <button onClick={handleSave}>Save </button>
        <button onClick={handleAddImage}>Add Image</button>
        <button onClick={handleAddVideo}>Add Video</button>
        <button onClick={handleAddGif}>Add GIF</button>
      </div>
      <textarea
        className="note-textarea"
        value={note}
        onChange={handleInputChange}
        placeholder="Type your todo here..."
        style={{
          fontWeight: formatting.bold ? 'bold' : 'normal',
          fontStyle: formatting.italic ? 'italic' : 'normal',
          textDecoration: formatting.underline ? 'underline' : 'none'
        }}
      />
      <div className="todo-list">
        <h2>NotePad-App</h2>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NoteApp;