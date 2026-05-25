import { useEffect, useState } from "react";
import api from "../services/api";

function Notes() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [notes, setNotes] = useState([]);

  const token = localStorage.getItem("token");

  const getNotes = async () => {
    try {
      const res = await api.get("/notes", {
        headers: {
          Authorization: token,
        },
      });

      setNotes(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addNote = async (e) => {
    e.preventDefault();

    try {
      await api.post(
        "/notes",
        {
          title,
          content,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      alert("Note Added");
      getNotes();
    } catch (error) {
      alert("Error Adding Note");
      console.log(error);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div>
      <h2>My Notes</h2>

      <form onSubmit={addNote}>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <br /><br />

        <textarea
          placeholder="Content"
          onChange={(e) => setContent(e.target.value)}
        />

        <br /><br />

        <button type="submit">Add Note</button>
      </form>

      <hr />

      {notes.map((note) => (
        <div key={note._id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Notes;