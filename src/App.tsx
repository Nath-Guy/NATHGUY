import "./App.css";
import Button from "./components/ui/Button/Button";

function App() {
  return (
    <div>
      React App
      <br />
      <Button
        style={{ textDecoration: "underline"}}
      >
        Pouet
      </Button>
      <Button bgColor="grey">Paf</Button>
      <Button>Plouf</Button>
      <Button bgColor="tomato">
        <div>
          He<u>ll</u>o
        </div>
        <div>
          He<u>ll</u>o
        </div>
      </Button>
    </div>
  );
}

export default App;
