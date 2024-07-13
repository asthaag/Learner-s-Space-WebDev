import React, { useState, useEffect } from 'react';
import AddNoteForm from './components/AddNoteForm';
import EditNoteForm from './components/EditNoteForm';
import ThemeToggle from './components/ThemeToggle';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Custom CSS for dark mode and additional styles

const App = () => {
  const [editIndex, setEditIndex] = useState(-1);
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'light';
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const editNote = (index, editedNote) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = editedNote;
    setNotes(updatedNotes);
    setEditIndex(-1); // Reset edit index after saving
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
    setEditIndex(-1); // Reset edit index if deleting edited note
  };

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleCancelEdit = () => {
    setEditIndex(-1);
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className={theme === 'dark' ? 'text-light' : 'text-dark'}>Notes App</h1>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
      <div className="container maindiv">
        <AddNoteForm onAdd={addNote} />
        {notes.map((note, index) =>
          index === editIndex ? (
            <EditNoteForm
              key={index}
              note={note}
              onSave={(editedNote) => editNote(index, editedNote)}
              onCancel={handleCancelEdit}
            />
          ) : (
            <div className={`card mb-3 ${theme === 'dark' ? 'bg-dark text-light' : ''}`} key={index}>
              <div className="card-body">
                <h5 className={`card-title ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>{note.title}</h5>
                <p className={`card-text ${theme === 'dark' ? 'text-light' : 'text-dark'}`}>{note.content}</p>
                <button
                  className={`btn btn-primary me-2 ${theme === 'dark' ? 'btn-outline-light' : ''}`}
                  onClick={() => handleEdit(index)}
                >
                  Edit
                </button>
                <button
                  className={`btn btn-danger ${theme === 'dark' ? 'btn-outline-light' : ''}`}
                  onClick={() => deleteNote(index)}
                >
                  Delete
                </button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default App;
