import './App.css';
import GamePage from './components/GamePage';
import Welcome from './components/Welcome';
import logo from "./resources/logo.png";
import Modal from './components/modal/modal';
import About from './components/About';
import { useState } from 'react';
import { categories as allCategories } from './components/Questions';
import { Button, ButtonGroup } from '@mui/material';
import Rules from './components/Rules';
import ChooseCategories from './components/ChooseCategories';
import Survey from './components/Survey';
import CardImage from './resources/card1.png';


function App() {
  const [showAbout, toggleShowAbout] = useState(false);
  const [showRules, toggleShowRules] = useState(false);
  const [showChooseCategories, setShowChooseCategories] = useState(false);

  // Persisted config state
  // Default: all categories and deep questions enabled
  const [selectedCategories, setSelectedCategories] = useState<string[]>([...allCategories]);
  const [includeDeep, setIncludeDeep] = useState(true);


  const openAbout = () => { toggleShowAbout(true) }
  const closeAbout = () => { toggleShowAbout(false) }
  const openRules = () => { toggleShowRules(true) }
  const closeRules = () => { toggleShowRules(false) }
  const openChooseCategories = () => { setShowChooseCategories(true) }
  const closeChooseCategories = () => { setShowChooseCategories(false) }

  // Modal state for Welcome and GamePage
  const [showWelcome, setShowWelcome] = useState(true);
  const [showGame, setShowGame] = useState(true);

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
         <div className="w-full flex flex-col justify-center px-4 md:px-16 xl:px-48 mb-2">
          <GamePage
          selectedCategories={selectedCategories}
          includeDeep={includeDeep}
          onBack={goToWelcome}
          />
          <div style={{ textAlign: 'center', fontSize: '1rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'inherit', marginBottom: '0.5rem' }}>
            <span style={{ fontWeight: 'bold' }}>Disclaimer</span><br />
            This activity is intended for team-building purposes only. It is not a diagnostic or therapeutic tool. Some questions may touch on personal or 
            emotional topics. If at any point you feel uncomfortable, you are encouraged to pass or take a break.
            </div>
            {/* <Survey></Survey> */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center' }}>
              <h2 style={{ marginBottom: '1rem', fontWeight: 'bold', fontSize: '1rem' }}>Feedback Survey</h2>
              <img src={CardImage} alt="Card" style={{ width: '180px', height: 'auto', marginBottom: '1.5rem' }} />
              <div style={{ marginBottom: '1rem', fontSize: '1.1rem' }}>
                or go to <a href="https://www.menti.com" target="_blank" rel="noopener noreferrer" 
                style={{ color: '#2563eb', textDecoration: 'underline' }}>www.menti.com</a> and enter the code 
                <span style={{ fontWeight: 'bold', letterSpacing: '2px' }}>xxxx xxxx</span>

              </div>
              <p style={{ maxWidth: '400px', fontSize: '1rem' }}>
                We'd love to hear your thoughts and impressions to help us make the game even better.
              </p>
            </div>
            </div>

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

    </div>
  );
}
export default App;
