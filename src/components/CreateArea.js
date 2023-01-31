import { useState } from "react";

export default function CreateArea(props) {
  const [titleNote, setTitleNote] = useState("");

  function handleChange(event) {
    setTitleNote(event.target.value);
  }

  return (
    <div className="form">
      <input
        name="title"
        placeholder="Title"
        type="text"
        value={titleNote}
        onChange={handleChange}
      />

      <textarea
        name="content"
        placeholder="Take a note..."
        rows="6"
        type="text"
      />
      {/* <button
        onClick={() => {
          props.addNote(titleNote, contentNote);
          setTitleNote("");
          setContentNote("");
        }}
      >
        Add
      </button> */}
      <button
        onClick={() => {
          props.addItem(titleNote);
          setTitleNote("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}
