import './App.css';
import GamePage from './components/GamePage';
import Welcome from './components/Welcome';
import About from './components/About';
import Rules from "./components/Rules";
import logo from "./resources/logo.png";

function App() {
  return (
    <div>
      <div>
        <img style={{ display: 'block', marginRight: 'auto', marginLeft: 'auto' }} className="w-2/3 md:w-1/3" src={logo}></img>
      </div>
      <Welcome />
      <Rules />
      <GamePage />
      <About />
    </div>
  );
}

export default App;
