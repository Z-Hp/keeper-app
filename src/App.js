import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { useState } from "react";

function App() {
  const [listItems, setListItems] = useState([]);

  function addItem(titleNote) {
    setListItems((prevValue) => {
      return [...prevValue, titleNote];
    });
    console.log(listItems);
  }

  return (
    <div className="App">
      <Header />
      <CreateArea addItem={addItem} />
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;
