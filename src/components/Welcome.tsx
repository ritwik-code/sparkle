import logo from "../resources/logo.png";
function Welcome() {
  return (
    // <div className='my-4'>

      <div className='grid h-screen place-items-center'>

        <div className='w-3/4'>
          <div>
            <img style={{ display: 'block', marginRight: 'auto', marginLeft: 'auto' }} className="w-1/3" src={logo}></img>
          </div>
          <div className="mt-5">
            <h2 className='text-center font-customFont font-outline-05 font-bold text-xl text-white'>Welcome to Sparkle, the card game that invites you and your fellow players to build and deepen interpersonal relationships by inspiring you to share your thoughts, feelings, and experiences. The game is designed to create a safe and trusting environment where you can open up and share your thoughts and feelings, and in doing so, build mutual support and trust among your team members.</h2>
          </div>
          <div className="mt-5">
            <h2 className='text-center font-customFont font-outline-05 font-bold text-xl text-white'>Each card contains a question or statement that encourages you to think about a specific topic and share your thoughts and experiences on it. The questions are formulated in such a way that they help you get to know yourself better while also understanding your team members better.</h2>
          </div>
          <div className="mt-5">
            <h2 className='text-center font-customFont font-outline-05 font-bold text-xl text-white'>So let´s get started and let us Sparkle!</h2>
          </div>

{/* 
          <div className="mt-5">
            <h2 className='text-center font-customFont font-outline-05 font-bold text-white'>The name Sparkle represents the idea of shining brightly with unique flashes of light, which represent personal experiences. Sharing them with others will enhance this sparkle and help you to see yourself and other team members in a new light. At its core, Sparkle is about building strong, long-lasting relationships and mutual support among team members. We believe that by doing so, you will not only have more fun playing the game, but you will also be better equipped to tackle challenges together and achieve better results.</h2>
          </div> */}

        </div>
      </div>
    // </div>
  );
}

export default Welcome;
