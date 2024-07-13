import React, { useState } from 'react';

const AddNoteForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          placeholder="description"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Add Note
      </button>
    </form>
  );
};

export default AddNoteForm;
