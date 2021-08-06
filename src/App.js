import "./App.css";
import "@fontsource/roboto";

import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import Footer from "./components/Footer";

import HomeContentBlock from "./pages/HomeContentBlock";
import VideosContentBlock from "./pages/VideosContentBlock";
import DownloadsContentBlock from "./pages/DownloadsContentBlock";
import AboutContentBlock from "./pages/AboutContentBlock";
import Error404 from "./pages/Error404";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SideNav />

      <Switch>
        <Route path="/hw-cad-tools/" exact>
          <HomeContentBlock />
        </Route>
        <Route path="/hw-cad-tools/videos">
          <VideosContentBlock />
        </Route>
        <Route path="/hw-cad-tools/downloads">
          <DownloadsContentBlock />
        </Route>
        <Route path="/hw-cad-tools/about">
          <AboutContentBlock />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
