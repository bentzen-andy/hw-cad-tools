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
      <RouterComponent />
      <Footer />
    </div>
  );
}

export default App;
