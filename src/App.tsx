import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/ui/Button/Button";

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(counter, 'modified')
  }, [counter]);

  return (
    <div style={{ textAlign: "center" }}>
      <div> Valeur de counter : {counter}</div>
      React App
      <br />
      <Button style={{ textDecoration: "underline" }}>Pouet</Button>
      <Button bgColor="grey">Paf</Button>
      <Button
        onButtonClick={(arg) => {
          setCounter(counter - 1);
          console.log("value counter = ", counter);
        }}
      >
        -1
      </Button>
      <Button
        bgColor="tomato"
        onButtonClick={(arg) => {
          setCounter(counter + 1);
          console.log("value counter = ", counter);
        }}
      >
        +1
      </Button>
    </div>
  );
}

export default App;
