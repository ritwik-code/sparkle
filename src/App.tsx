import './App.css';
import GamePage from './components/GamePage';
import Welcome from './components/Welcome';
import Rules from "./components/Rules";
import logo from "./resources/logo.png";
import Modal from './components/modal/modal';
import About from './components/About';
import { useState } from 'react';
import { Button } from '@mui/material';

function App() {

  const [showAbout, toggleShowAbout] = useState(false);
  const [showWelcome, toggleShowWelcome] = useState(true);

  const openAbout = () => { toggleShowAbout(true) }
  const closeAbout = () => { toggleShowAbout(false) }

  const closeWelcome = () => { toggleShowWelcome(false) }

  return (
    <div >
      <div>
        <img style={{ marginRight: 'auto', marginLeft: 'auto' }} alt='logo' className="w-2/3 md:w-1/3 lg:1/4 xl:w-1/5 2xl:1/6" src={logo}></img>
      </div>
      <GamePage />
      {showWelcome && <Modal handleClose={closeWelcome} component={Welcome()}/>}
      <Button style={{ marginRight: 'auto', marginLeft: 'auto' }} onClick={openAbout}>About</Button>
      {showAbout && <Modal handleClose={closeAbout} component={About()}/>}
    </div >
  );
}
export default App;
