import React from 'react';
import heart from "../resources/heart.png";
import frame from "../resources/frame.svg"
import { ReactComponent as Frame } from "../resources/frame.svg";
function Welcome() {
  return (
    <div className='my-4'>
  
      <div className='grid h-screen place-items-center'>

        <div className='w-1/2'>
          <div>
            <h1 className='font-outline-2 font-bold text-5xl text-white text-center'>Sparkle</h1>
          </div>

          <div>
            <h2 className='text-center font-outline-05 font-bold text-3xl text-white'>Embark on a Journey of Connection with Sparkle: Delve into Constellations of Shared Stories, Unearth the Depths, and Build Team Harmony, Guided by the Wisdom of Knowing Each Other.</h2>
          </div>

          <div className='my-4'>
            <div className='flex justify-evenly'>
              <h3 className='font-outline-1 font-bold text-4xl text-white'>RULES</h3>
            </div>
            <div className='flex'>
              <div className='w-1/3'>
                <h4 className='font-outline-05 font-bold text-xl text-white text-center'>The game master shares the screen and reveals cards from two categories, Personal and Hypothetical</h4>
              </div>
              <div className='w-1/3'>
                <h4 className='text-center font-outline-05 font-bold text-xl text-white'>The participant chooses the category and the card number. On revealing the card the participant answers the question</h4>
              </div>
              <div className='w-1/3'>
                <h4 className='text-center font-outline-05 font-bold text-xl text-white'>The game master can choose to allow the player a different question if the question if the player requests for another</h4>
              </div>
            </div>
          </div>
        </div>
        <div className='flex'>
          <h3 className="font-outline-05 text-ellipsis text-center font-semibold text-white mx-1">Made with</h3> <img className='w-8 h-8' src={heart}></img><h3 className="font-outline-05 text-ellipsis text-center font-semibold text-white mx-1"> at UBS Qatar</h3>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
