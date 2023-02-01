import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
// import { useState } from "react";

function App() {
  function addNote(note) {
    console.log(note);
  }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
