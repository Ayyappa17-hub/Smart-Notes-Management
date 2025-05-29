import React, { useEffect, useState } from 'react';
import NoteCard from './components/NoteCard';

function App() {
  const [notes, setNotes] = useState([]);
  const [editNote, setEditNote] = useState(null); // Holds the note being edited
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    tag: ''
  });

  useEffect(() => {
    setNotes([
      {
        id: 1,
        title: 'Meeting on 7th April',
        description: 'Meeting on 7th April Meeting on 7th April',
        date: '2024-04-03',
        tag: 'Meeting'
      },
      {
        id: 2,
        title: 'Trip to Tirupati',
        description: 'Plan for the temple visit and stay',
        date: '2024-05-15',
        tag: 'Journey'
      }
    ]);
  }, []);

  const handleEdit = (note) => {
    setEditNote(note);
    setFormData({
      title: note.title,
      description: note.description,
      date: note.date,
      tag: note.tag
    });
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this note?');
    if (confirmDelete) {
      setNotes(notes.filter(note => note.id !== id));
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedNotes = notes.map((note) =>
      note.id === editNote.id ? { ...note, ...formData } : note
    );
    setNotes(updatedNotes);
    setEditNote(null); // Close the form
  };

  return (
    <div style={{ padding: '20px' }}>
      {/* Edit Form */}
      {editNote && (
        <form onSubmit={handleUpdate} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '8px' }}>
          <h3>Editing: {editNote.title}</h3>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Title"
            required
            style={{ display: 'block', marginBottom: '10px', width: '100%' }}
          />
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Description"
            required
            style={{ display: 'block', marginBottom: '10px', width: '100%' }}
          />
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            required
            style={{ display: 'block', marginBottom: '10px' }}
          />
          <input
            type="text"
            value={formData.tag}
            onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
            placeholder="Tag"
            required
            style={{ display: 'block', marginBottom: '10px', width: '100%' }}
          />
          <button type="submit" style={{ marginRight: '10px' }}>Update</button>
          <button type="button" onClick={() => setEditNote(null)}>Cancel</button>
        </form>
      )}

      {/* Note Cards */}
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {notes.map((note) => (
          <NoteCard
            key={note.id}
            note={note}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
