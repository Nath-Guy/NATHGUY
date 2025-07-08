import "./App.css";
import FlexHorizontalFirstGrow from "./components/layout/FlexHorizontalFirstGrow/FlexHorizontalFirstGrow";
import FlexVerticalThirdGrow from "./components/layout/FlexVerticalThirdGrow/FlexVerticalThirdGrow";
import MemeForm from "./components/MemeForm/MemeForm";
import Header from "./components/ui/Header/Header";
import MemeSvgViewer from "./components/ui/MemeSVGViewer/MemeSVGViewer";
import Navbar from "./components/ui/Navbar/Navbar";

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
