import React from "react";
import Structure from "./Structure";
import notes from "../notes";

function Note() {
  return (
    notes.map((note)=>(
      <Structure key={note.key} title = {note.title} content={note.content}/>
    ))
  );
}

export default Note;
