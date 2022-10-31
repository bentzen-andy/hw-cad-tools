import "./App.css";
import "@fontsource/roboto";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import RouterComponent from "./router/RouterComponent";

function App() {
  return (
    <div>
      <Navbar />
      <RouterComponent />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
