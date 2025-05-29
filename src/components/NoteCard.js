import React from 'react';
import './NoteCard.css'; // Optional: for styling if you have it

const NoteCard = ({ note, onEdit, onDelete }) => {
  return (
    <div className="note-card" style={{
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "16px",
      margin: "10px",
      width: "250px",
      boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3>{note.title}</h3>
        <span style={{ cursor: "pointer" }}>📌</span>
      </div>
      <p style={{ fontSize: "12px", color: "#666" }}>
        {new Date(note.createdAt).toLocaleDateString()}
      </p>
      <p>{note.description}</p>
      <p style={{ color: "#4285f4", fontWeight: "bold" }}>#{note.tag}</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => onEdit(note)}>✏️</button>
        <button onClick={() => onDelete(note._id)}>🗑️</button>
      </div>
    </div>
  );
};

export default NoteCard;
