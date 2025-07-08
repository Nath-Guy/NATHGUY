import { emptyMeme, MemeSVGViewer } from "orsys-tjs-meme";
import { useState } from "react";
import "./App.css";
import FlexHorizontalFirstGrow from "./components/layout/FlexHorizontalFirstGrow/FlexHorizontalFirstGrow.tsx";
import FlexVerticalThirdGrow from "./components/layout/FlexVerticalThirdGrow/FlexVerticalThirdGrow.tsx";
import MemeForm from "./components/MemeForm/MemeForm.tsx";
import Footer from "./components/ui/Footer/Footer.tsx";
import Header from "./components/ui/Header/Header.tsx";
import Navbar from "./components/ui/Navbar/Navbar.tsx";

const App = () => {
  const [meme, setMeme] = useState(emptyMeme)
  return (
    <>
    <div> {JSON.stringify(meme)}</div>
      <div className="App">
        <FlexVerticalThirdGrow>
          <Header></Header>
          <Navbar></Navbar>
          <FlexHorizontalFirstGrow>
            <MemeSVGViewer image={undefined} meme={meme} />
            <MemeForm meme={meme} onMemeChange= {(m) => {setMeme(m)}} />
          </FlexHorizontalFirstGrow>
          <Footer></Footer>
        </FlexVerticalThirdGrow>
      </div>
      </>
  );
};

export default App;
