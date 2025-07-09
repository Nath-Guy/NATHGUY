import { emptyMeme, MemeSVGViewer, type ImageInterface } from "orsys-tjs-meme";
import { useEffect, useState } from "react";
import "./App.css";
import FlexHorizontalFirstGrow from "./components/layout/FlexHorizontalFirstGrow/FlexHorizontalFirstGrow.tsx";
import FlexVerticalThirdGrow from "./components/layout/FlexVerticalThirdGrow/FlexVerticalThirdGrow.tsx";
import MemeForm from "./components/MemeForm/MemeForm.connected.tsx";
import Footer from "./components/ui/Footer/Footer.tsx";
import Header from "./components/ui/Header/Header.tsx";
import Navbar from "./components/ui/Navbar/Navbar.tsx";
import { store } from "./store/store.ts";

const App = () => {
  const [meme, setMeme] = useState(emptyMeme);

  //initial state of images : empty array
  const [images, setImages] = useState<Array<ImageInterface>>([]);

  console.log(store);

  useEffect(() => {
    fetch("http://localhost:5679/images")
      .then((r) => r.json())
      .then((arr) => setImages(arr));
  }, []);

  return (
    <>
      <div> {JSON.stringify(images)}</div>
      <div className="App">
        <FlexVerticalThirdGrow>
          <Header></Header>
          <Navbar></Navbar>
          <FlexHorizontalFirstGrow>
            <MemeSVGViewer image={undefined} meme={meme} />
            <MemeForm
              images={images}
            />
          </FlexHorizontalFirstGrow>
          <Footer></Footer>
        </FlexVerticalThirdGrow>
      </div>
    </>
  );
};

export default App;
