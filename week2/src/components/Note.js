import React from 'react';

const Note = ({ note, onDelete }) => (
  <div className="card mb-3">
    <div className="card-body">
      <h5 className="card-title">{note.title}</h5>
      <p className="card-text">{note.content}</p>
      <button onClick={() => onDelete(note.id)} className="btn btn-danger">
        Delete
      </button>
    </div>
  </div>
);

export default Note;
