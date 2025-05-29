import React, { useState } from 'react';
import AddNote from './components/AddNote';
import NoteCard from './components/NoteCard';

function App() {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    setNotes([newNote, ...notes]);
  };

  const handleDeleteNote = (indexToDelete) => {
    const updatedNotes = notes.filter((_, index) => index !== indexToDelete);
    setNotes(updatedNotes);
  };

  const handleEditNote = (indexToEdit, updatedNote) => {
    const updatedNotes = notes.map((note, index) =>
      index === indexToEdit ? updatedNote : note
    );
    setNotes(updatedNotes);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ textAlign: 'center' }}>📝 My Notes App</h1>
      <AddNote onAdd={handleAddNote} />

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '20px',
        marginTop: '30px'
      }}>
        {notes.map((note, index) => (
          <NoteCard
            key={index}
            note={note}
            onDelete={() => handleDeleteNote(index)}
            onEdit={(updatedNote) => handleEditNote(index, updatedNote)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
