import "./App.css";
import FlexHorizontalFirstGrow from "./components/layout/FlexHorizontalFirstGrow/FlexHorizontalFirstGrow.tsx";
import FlexVerticalThirdGrow from "./components/layout/FlexVerticalThirdGrow/FlexVerticalThirdGrow.tsx";
import MemeForm from "./components/MemeForm/MemeForm.connected.tsx";
import MemeSVGViewer from "./components/MemeSVGViewer/MemeSVGViewer.connected.tsx";
import Footer from "./components/ui/Footer/Footer.tsx";
import Header from "./components/ui/Header/Header.tsx";
import Navbar from "./components/ui/Navbar/Navbar.tsx";

const App = () => {
  return (

      <div className="App">
        <FlexVerticalThirdGrow>
          <Header></Header>
          <Navbar></Navbar>
          <FlexHorizontalFirstGrow>
            <MemeSVGViewer />
            <MemeForm />
          </FlexHorizontalFirstGrow>
          <Footer></Footer>
        </FlexVerticalThirdGrow>
      </div>

  );
};

export default App;
