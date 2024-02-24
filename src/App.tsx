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
        <img style={{marginRight: 'auto', marginLeft: 'auto' }} className="w-2/3 md:w-1/3 lg:1/4 xl:w-1/5 2xl:1/6" src={logo}></img>
      </div>
      <Welcome />
      <Rules />
      <GamePage />
      <About />
    </div>
  );
}

export default App;
