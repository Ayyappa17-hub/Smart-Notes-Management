import React, { useState } from 'react';
import './AddNote.css';

const AddNote = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tag, setTag] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    const newNote = {
      title,
      description,
      tag,
      createdAt: new Date().toISOString()

    };

    onAdd(newNote);
    setTitle('');
    setDescription('');
    setTag('');
  };

  return (
    <form className="add-note-form" onSubmit={handleSubmit}>
      <h2>Add a New Note</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Tag (optional)"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />
      <button type="submit">Add Note</button>
    </form>
  );
};

export default AddNote;
