import "./App.css";
import { useState } from "react";
import { addDoc, collection } from "@firebase/firestore";
import { firebase } from "./firebase";
function App() {
  const [data, setData] = useState("");
  const handleInput = (e) => {
    console.log(e.target.value);

    setData(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!data) return;
    try {
      const docRef = await addDoc(collection(firebase, "books"), {
        title: data,
      });
      setData("");
      console.log("Document written with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  return (
    <div className="App">
      <form>
        <label>Book title</label>
        <input type="text" value={data} onChange={handleInput}></input>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
