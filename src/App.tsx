import './App.css';
import GamePage from './components/GamePage';
import Welcome from './components/Welcome';
import logo from "./resources/logo.png";
import Modal from './components/modal/modal';
import About from './components/About';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { categories as allCategories } from './components/Questions';
import { Button, ButtonGroup } from '@mui/material';
import Rules from './components/Rules';
import { Routes, Route } from 'react-router-dom';
import ChooseCategories from './components/ChooseCategories';


function App() {
  const [showAbout, toggleShowAbout] = useState(false);
  const [showRules, toggleShowRules] = useState(false);
  const [showChooseCategories, setShowChooseCategories] = useState(false);

  // Persisted config state
  const [selectedCategories, setSelectedCategories] = useState<string[]>([...allCategories]);
  const [includeDeep, setIncludeDeep] = useState(true);

  const navigate = useNavigate();

  const openAbout = () => { toggleShowAbout(true) }
  const closeAbout = () => { toggleShowAbout(false) }
  const openRules = () => { toggleShowRules(true) }
  const closeRules = () => { toggleShowRules(false) }
  const openChooseCategories = () => { setShowChooseCategories(true) }
  const closeChooseCategories = () => { setShowChooseCategories(false) }

  // Handler for Save & Start Game in modal
  const handleSaveAndStartGame = () => {
    setShowChooseCategories(false);
    navigate('/game', { state: { selectedCategories, includeDeep } });
  };

  return (
    <div >
        <div className='w-10/12 mr-auto ml-auto'>
          <img  alt='logo' className="mr-auto ml-auto w-2/3 md:w-1/3 lg:1/4 xl:w-1/5 2xl:1/6" src={logo}></img>
        </div>
      <p className='text-center md:text-xl xl:text-2xl'>The card game that builds and deepens interpersonal relationships</p>

      <div className='p-5 grid place-items-center'>
        <ButtonGroup>
          <Button color='inherit' onClick={openRules}>Rules</Button>
          <Button color='inherit' onClick={openChooseCategories}>Choose Categories</Button>
          <Button color='inherit' onClick={openAbout}>About</Button>
        </ButtonGroup>
      </div>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
      {showAbout && <Modal handleClose={closeAbout} component={About()} />}
      {showRules && <Modal handleClose={closeRules} component={Rules()} />}
      {showChooseCategories && (
        <Modal
          handleClose={closeChooseCategories}
          component={
            <ChooseCategories
              selectedCategories={selectedCategories}
              includeDeep={includeDeep}
              onChangeCategories={setSelectedCategories}
              onChangeIncludeDeep={setIncludeDeep}
              onSave={handleSaveAndStartGame}
            />
          }
        />
      )}
    </div >
  );
}
export default App;
