import { useState, useEffect } from "react";
import styles from "./Hnotes.module.css";

const Notes = () => {
  const storedNote = window.localStorage.getItem("notes") || "";
  const [note, setNote] = useState(storedNote);

  useEffect(() => {
    window.localStorage.setItem("notes", note);
  }, [note]); 

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  return (
    <div className={styles.notes}>
      <p className={styles.title}>All notes</p>
      <textarea  value={note} onChange={handleChange} />
    </div>
  );
};

export default Notes;
