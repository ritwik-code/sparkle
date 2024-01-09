import React from 'react';
import './App.css';
import GamePage from './components/GamePage';
import ParticlesBg from './components/ParticlesBg';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import team from "./resources/CorporateTeam.jpg"
import sun from "./resources/sun.png"




import Welcome from './components/Welcome';

function App() {
  return (
    <div>
      {/* <div>
        <img style={{ objectFit: "cover", width: "100vw", height: "100vh", position: "fixed", zIndex: -2, filter: "blur(.25px)" }} src={team}></img>
      </div>
      <div style={{ position: "fixed", width: "100%", height: "100%", zIndex: -1, }}>
        <ParticlesBg ></ParticlesBg>
      </div> */}

      <Parallax pages={2}>
        {/* <div className="grid h-screen place-items-center">
          <img style={{ position: "fixed", zIndex: -3 }} className="w-1/2"src={sun}></img>
        </div> */}
        <ParallaxLayer speed={0.5}>
          <Welcome />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <GamePage />
        </ParallaxLayer>

      </Parallax>
    </div>
  );
}

export default App;
