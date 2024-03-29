import './App.css';
import GamePage from './components/GamePage';
import Welcome from './components/Welcome';
import logo from "./resources/logo.png";
import Modal from './components/modal/modal';
import About from './components/About';
import { useState } from 'react';
import { Button, ButtonGroup } from '@mui/material';
import Rules from './components/Rules';

function App() {

  const [showAbout, toggleShowAbout] = useState(false);
  const [showWelcome, toggleShowWelcome] = useState(true);

  const [showRules, toggleShowRules] = useState(false);


  const openAbout = () => { toggleShowAbout(true) }
  const closeAbout = () => { toggleShowAbout(false) }
  const closeWelcome = () => { toggleShowWelcome(false) }
  const openRules = () => { toggleShowRules(true) }
  const closeRules = () => { toggleShowRules(false) }
  return (
    <div >
      <div>
        <img style={{ marginRight: 'auto', marginLeft: 'auto' }} alt='logo' className="w-2/3 md:w-1/3 lg:1/4 xl:w-1/5 2xl:1/6" src={logo}></img>
      </div>
      
      <p className='text-center md:text-xl xl:text-2xl'>The card game that builds and deepens interpersonal relationships</p>
      
      <div className='p-5 grid place-items-center'>
          <ButtonGroup>
            <Button onClick={openRules}>Rules</Button>
            <p></p>
            <Button onClick={openAbout}>About</Button>
          </ButtonGroup>
      </div>
      <GamePage />
      {showWelcome && <Modal handleClose={closeWelcome} component={Welcome()} />}
      {showAbout && <Modal handleClose={closeAbout} component={About()} />}
      {showRules && <Modal handleClose={closeRules} component={Rules()} />}


    </div >
  );
}
export default App;
