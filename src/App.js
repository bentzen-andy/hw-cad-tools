import './App.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import ButtonAppBar from './components/ButtonAppBar';
import FormPropsTextFields from './components/FormPropsTextFields';
import ClippedDrawer from './components/ClippedDrawer';

function App() {
  return (
    <div className="App">
      {/* <Navbar activeLink="home" /> */}
      <ButtonAppBar />
      <ClippedDrawer />
    </div>
  );
}

export default App;


