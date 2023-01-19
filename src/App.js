import "./App.css";
import notes from "../src/notes";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";

function App() {
  return (
    <div className="App">
      <Header />

      {notes.map((note) => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}

      <Footer />
    </div>
  );
}

export default App;
