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
import ChooseCategories from './components/ChooseCategories';


function App() {
  const [showAbout, toggleShowAbout] = useState(false);
  const [showRules, toggleShowRules] = useState(false);
  const [showChooseCategories, setShowChooseCategories] = useState(false);

  // Persisted config state
  // Default: all categories and deep questions enabled
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

  // Modal state for Welcome and GamePage
  const [showWelcome, setShowWelcome] = useState(true);
  const [showGame, setShowGame] = useState(false);

  // Start game from Welcome or ChooseCategories
  const startGame = () => {
    setShowWelcome(false);
    setShowGame(true);
  };

  // Go back to Welcome (if needed)
  const goToWelcome = () => {
    setShowGame(false);
    setShowWelcome(true);
  };

  // Handler for Save & Start Game in modal
  const handleSaveAndStartGameModal = () => {
    setShowChooseCategories(false);
    startGame();
  };

  return (
    <div>
      <div className='w-10/12 mr-auto ml-auto'>
        <img alt='logo' className="mr-auto ml-auto w-2/3 md:w-1/3 lg:1/4 xl:w-1/5 2xl:1/6" src={logo}></img>
      </div>
      <p className='text-center md:text-xl xl:text-2xl'>The card game that builds and deepens interpersonal relationships</p>

      {/* Only show menu buttons if not on Welcome modal */}
      {!showWelcome && (
        <div className='p-5 grid place-items-center'>
          <ButtonGroup>
            <Button color='inherit' onClick={openRules}>Guidelines</Button>
            <Button color='inherit' onClick={openChooseCategories}>Choose Categories</Button>
            <Button color='inherit' onClick={openAbout}>About</Button>
          </ButtonGroup>
        </div>
      )}


      {/* Welcome Modal */}
      {showWelcome && (
        <Modal
          handleClose={() => setShowWelcome(false)}
          component={
            <Welcome
              selectedCategories={selectedCategories}
              includeDeep={includeDeep}
              onChangeCategories={setSelectedCategories}
              onChangeIncludeDeep={setIncludeDeep}
              onStartGame={startGame}
            />
          }
        />
      )}

      {/* Game Page (not modal) */}
      {!showWelcome && showGame && (
        <GamePage
          selectedCategories={selectedCategories}
          includeDeep={includeDeep}
          onBack={goToWelcome}
        />
      )}

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
              onSave={handleSaveAndStartGameModal}
            />
          }
        />
      )}
      {/* Disclaimer at the bottom */}
      <div className="w-full flex justify-center mt-8 px-4 md:px-16 xl:px-48">
        <div className="text-center font-outline-05 font-semi-bold md:text-xl xl:text-2xl">
          <span style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Disclaimer:</span><br />
          This activity is intended for team-building purposes only. It is not a diagnostic or therapeutic tool. Some questions may touch on personal or emotional topics. If at any point you feel uncomfortable, you are encouraged to pass or take a break.
        </div>
      </div>
    </div>
  );
}
export default App;
