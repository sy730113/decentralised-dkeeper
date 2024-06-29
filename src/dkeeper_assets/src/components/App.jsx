import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { dkeeper } from "../../../declarations/dkeeper"; // Correctly import the backend actor

function App() {
  const [notes, setNotes] = useState([]);

  async function addNote(newNote) {
    await dkeeper.createNote(newNote.title, newNote.content);
    setNotes(prevNotes => [...prevNotes, newNote]); // Correctly update the state with the new note
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const notesArray = await dkeeper.readNote();
    setNotes(notesArray);
  }

   function deleteNote(id) {
   dkeeper.removeNote(id); // Ensure you're calling the correct backend actor method
    setNotes(prevNotes => prevNotes.filter((noteItem, index) => index !== id));
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => (
        <Note
          key={index}
          id={index}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
