import React from 'react';
import './App.css';
import GamePage from './components/GamePage';
import ParticlesBg from './components/ParticlesBg';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import SpaceBG from "./resources/SpageBGAll.jpg"
// import SpaceBG from "./resources/milyway.jpeg"
import sun from "./resources/sun.png"
import earth from "./resources/earth.png"
import eris from "./resources/eris.png"
import mars from "./resources/mars.png"
import jupiter from "./resources/jupiter.png"
import mercury from "./resources/mercury.png"
import moon from "./resources/moon.png"
import neptune from "./resources/neptune.png"
import uranus from "./resources/uranus.png"
import saturn from "./resources/saturn.png"
import pluto from "./resources/pluto.png"
import venus from "./resources/venus.png"



import Welcome from './components/Welcome';
// function App() {
//   return (
//     <div>
//       <div>
//         <div style={{ position: "fixed", width: "100%", height: "100%", zIndex: -10, }}>
//           <ParticlesBg ></ParticlesBg>
//         </div>
//         <GamePage></GamePage>
//       </div>
//     </div>
//   );
// }

function App() {
  return (
    <div>
      <div>
        <img style={{ objectFit: "cover", width: "100vw", height: "100vh", position: "fixed", zIndex: -2, filter: "blur(1px)" }} src={SpaceBG}></img>
      </div>
      {/* <div style={{ position: "fixed", width: "100%", height: "100%", zIndex: -1, }}>
        <ParticlesBg ></ParticlesBg>
      </div> */}

      <Parallax pages={2}>
        <div className="grid h-screen place-items-center">
          <img style={{ position: "fixed", zIndex: -3 }} className="w-1/2"src={sun}></img>
        </div>
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
