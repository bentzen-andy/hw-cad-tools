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
import VideoLandingPage from "./pages/VideoLandingPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SideNav />

      <Switch>
        <Route path="/hw-cad-tools/" exact>
          <HomeContentBlock />
        </Route>
        <Route path="/hw-cad-tools/videos" exact>
          <VideosContentBlock />
        </Route>
        <Route path="/hw-cad-tools/videos/hw-combine-mesh" exact>
          <VideoLandingPage url="https://www.youtube.com/embed/NATsPEB2w1I" />
        </Route>
        <Route path="/hw-cad-tools/downloads" exact>
          <DownloadsContentBlock />
        </Route>
        <Route path="/hw-cad-tools/about" exact>
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
