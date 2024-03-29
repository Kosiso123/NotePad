import React from 'react';
import NoteApp from './components/NoteApp';
import { useNoteStore } from './store'; // Import the custom hook

function App() {
  return (
    <NoteApp />
  );
}

export default App;
