import { Route, Routes } from "react-router";
import "./App.css";
import FlexHorizontalFirstGrow from "./components/layout/FlexHorizontalFirstGrow/FlexHorizontalFirstGrow.tsx";
import FlexVerticalThirdGrow from "./components/layout/FlexVerticalThirdGrow/FlexVerticalThirdGrow.tsx";
import Footer from "./components/ui/Footer/Footer.tsx";
import Header from "./components/ui/Header/Header.tsx";
import Navbar from "./components/ui/Navbar/Navbar.tsx";

import Editor from "./pages/Editor.tsx";
import Home from "./pages/Home.tsx";
import Thumbnail from "./pages/Thumbnail.tsx";

const App = () => {
  return (
    <div className="App">
      <FlexVerticalThirdGrow>
        <Header></Header>
        <Navbar></Navbar>
        <FlexHorizontalFirstGrow>

          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/editor" Component={Editor}/>
            <Route path="/editor/:id" Component={Editor}/>
            <Route path="/thumbnail" Component={Thumbnail}/>
          </Routes>

        </FlexHorizontalFirstGrow>
        <Footer></Footer>
      </FlexVerticalThirdGrow>
    </div>
  );
};

export default App;
