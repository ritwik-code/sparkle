import logo from "../resources/logo.png";
function Welcome() {
  return (
    // <div className='my-4'>

    <div className='grid h-screen place-items-center'>
      <div className='w-3/4'>
        <div>
          <img style={{ display: 'block', marginRight: 'auto', marginLeft: 'auto' }} className="w-1/3" src={logo}></img>
        </div>
        <div className=" pb-14">
          <div className="mt-5">
            <h2 className='text-center font-customFont font-outline-05 font-bold text-xl text-white'>Welcome to Sparkle, the card game that invites you and your fellow players to build and deepen interpersonal relationships. The game is designed to create a safe and trusting environment where you can open up and share your thoughts, experiences and feelings, and in doing so, build mutual support and trust among your team members.</h2>
          </div>
          <div className="mt-5">
            <h2 className='text-center font-customFont font-outline-05 font-bold text-xl text-white'>Each card contains a question or statement that encourages you to think about a specific topic and share your thoughts and experiences on it. The questions are formulated in such a way that they help you get to know yourself better while also understanding your team members better.</h2>
          </div>
        </div>

        <div className="mt-5">
          <h2 className='text-center font-customFont font-outline-05 font-bold text-3xl text-red-500'>Rules of the game:</h2>
        </div>
        <div className="mt-5">
          <h3 className='text-center font-customFont font-outline-05 font-bold text-xl text-white'>Choose a card and try to answer the question. Skip as many times as you need if the answer is too personal to share in this moment.</h3>
        </div>
        <div className="mt-5">
          <h3 className='text-center font-customFont font-outline-05 font-bold text-xl text-white'>If you answered the question, turn the card around and let the next player pick one (every time you turn a card around, a new question will be selected from set of 220 carefully crafted questions).</h3>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
