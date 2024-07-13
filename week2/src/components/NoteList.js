import React from 'react';

const NoteList = ({ notes, editNote, deleteNote }) => {
  const handleEdit = (index, editedNote) => {
    editNote(index, editedNote);
  };

  return (
    <div>
      {notes.map((note, index) => (
        <div className="card mb-3" key={index}>
          <div className="card-body">
            <h5 className="card-title">{note.title}</h5>
            <p className="card-text">{note.content}</p>
            <button
              className="btn btn-primary me-2"
              onClick={() => handleEdit(index, note)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => deleteNote(index)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
