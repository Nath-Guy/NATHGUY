import "./App.css";
import Button from "./components/ui/Button/Button";

function App() {
  return (
    <div>
      React App
      <br />
      <Button style={{ textDecoration: "underline" }}>Pouet</Button>
      <Button bgColor="grey">Paf</Button>
      <Button
        onButtonClick={(arg) => {
          console.log("-1 clicked");
        }}
      >
        -1
      </Button>
      <Button
        bgColor="tomato"
        onButtonClick={(arg) => {
          console.log("+1 clicked");
        }}
      >
        +1
      </Button>
    </div>
  );
}

export default App;
