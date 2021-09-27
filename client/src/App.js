import { useRef } from "react";
import axios from "axios";

function App() {
  const selectedFile = useRef();
  const upload = () => {
    const formdata = new FormData();
    formdata.append("picture", selectedFile.current.files[0]);
    axios.post("http://localhost:3001/uploads", formdata).then((response) => {
      console.log(response);
    });
  };
  return (
    <div className="App">
      <input type="file" ref={selectedFile} />
      <button onClick={upload}>upload</button>
    </div>
  );
}

export default App;
