import './App.css';
import GamePage from './components/GamePage';
import Welcome from './components/Welcome';
import About from './components/About';
import Rules from "./components/Rules";
import logo from "./resources/logo.png";
import AboutModal from './components/modal/about';
import { useState } from 'react';

function App() {

  const [showAbout, toggleShowAbout] = useState(false);

  const open = () => { toggleShowAbout(true) }
  const close = () => { toggleShowAbout(false) }

  return (
    <div>
      <div>
        <img style={{ marginRight: 'auto', marginLeft: 'auto' }} alt='logo' className="w-2/3 md:w-1/3 lg:1/4 xl:w-1/5 2xl:1/6" src={logo}></img>
      </div>
      {/* <Welcome />
      <Rules /> */}
      <GamePage />

      <button onClick={open}>About</button>
      {showAbout && <AboutModal handleClose={close} />}
      {/* <About /> */}
    </div>
  );
}
export default App;
