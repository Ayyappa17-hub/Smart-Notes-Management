import React, { useState, useEffect } from "react";

function NoteForm({ onAdd, onUpdate, currentNote, clearEdit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setDescription(currentNote.description);
      setTags((currentNote.tags || []).join(", "));
    }
  }, [currentNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const noteData = {
      title,
      description,
      tags: tags.split(",").map((tag) => tag.trim()),
    };
    currentNote ? onUpdate(currentNote._id, noteData) : onAdd(noteData);
    setTitle("");
    setDescription("");
    setTags("");
    clearEdit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        placeholder="Tags (comma-separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <button type="submit">{currentNote ? "Update" : "Add"} Note</button>
    </form>
  );
}

export default NoteForm;
