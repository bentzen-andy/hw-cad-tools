import "./App.css";
import "@fontsource/roboto";
import Navbar from "./components/Navbar";
import SideNav from "./components/SideNav";
import Footer from "./components/Footer";
import RouterComponent from "./pages/RouterComponent";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div className="column">
          <SideNav />
        </div>
        <div className="column">
          <RouterComponent />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
