import "./App.css";
import FlexHorizontalFirstGrow from "./components/layout/FlexHorizontalFirstGrow/FlexHorizontalFirstGrow.tsx";
import FlexVerticalThirdGrow from "./components/layout/FlexVerticalThirdGrow/FlexVerticalThirdGrow.tsx";
import MemeForm from "./components/MemeForm/MemeForm.tsx";
import Header from "./components/ui/Header/Header.tsx";
import MemeSvgViewer from "./components/ui/MemeSVGViewer/MemeSVGViewer.tsx";
import Navbar from "./components/ui/Navbar/Navbar.tsx";

const App = () => {
  return (
    <div className="App">
      <FlexVerticalThirdGrow>
        <Header></Header>
        <Navbar></Navbar>
        <FlexHorizontalFirstGrow>
          <MemeSvgViewer />
          <MemeForm data = 'test' />
        </FlexHorizontalFirstGrow>
      </FlexVerticalThirdGrow>
    </div>
  );
};

export default App;
