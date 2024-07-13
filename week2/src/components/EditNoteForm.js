import React, { useState } from 'react';

const EditNoteForm = ({ note, onSave, onCancel }) => {
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedContent] = useState(note.content);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...note, title: editedTitle, content: editedContent });
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Note Title"
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="Note Content"
          rows="3"
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary me-2">Save</button>
      <button type="button" className="btn btn-secondary" onClick={handleCancel}>Cancel</button>
    </form>
  );
};

export default EditNoteForm;
