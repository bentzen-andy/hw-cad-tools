import "./App.css";
import ButtonAppBar from "./components/ButtonAppBar";
import ClippedDrawer from "./components/ClippedDrawer";
import "@fontsource/roboto";
import FormPropsTextFields from "./components/FormPropsTextFields";
import Fetch from "./components/Fetch";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import { Switch, Route } from "react-router-dom";
import HomeContentBlock from "./pages/HomeContentBlock";
import VideosContentBlock from "./pages/VideosContentBlock";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SideNav />
      <Switch>
        <Route path="/videos">
          <VideosContentBlock />
        </Route>
        <Route path="/">
          <HomeContentBlock />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
