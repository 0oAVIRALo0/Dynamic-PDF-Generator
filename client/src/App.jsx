import axios from "axios";
import { saveAs } from "file-saver";
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  const handleOnChange = (event) => {
    setName(event.target.value);
  };

  const createAndDownloadPdf = () => {
    axios.post("/create-pdf", name);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleOnChange}
      />
      <input type="number" placeholder="Receipt ID" />
      <input type="text" placeholder="Price 1" />
      <input type="text" placeholder="Price 2" />
      <button onClick={createAndDownloadPdf}>Download PDF</button>
    </div>
  );
}

export default App;
