import logo from "../resources/logo.png";
function Welcome() {
  return (
    // <div className='my-4'>

    <div className='grid h-auto place-items-center'>
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
          <h2 className='text-center font-customFont font-outline-05 font-bold text-3xl text-red-500'>:Ground Rules:</h2>
        </div>
        <div className="mt-5">
          <h3 className='text-center font-customFont font-outline-05 font-bold text-xl text-white'>To ensure a trustful environment, answers may not leave this (virtual) room.</h3>
        </div>
        <div className="mt-5">
          <h3 className='text-center font-customFont font-outline-05 font-bold text-xl text-white'>No written answers, no recording.</h3>
        </div>
        <div className="mt-5">
          <h3 className='text-center font-customFont font-outline-05 font-bold text-xl text-white'>If you picked a question and you feel uncomfortable to answer it, skip as many times as you need.</h3>
        </div>
        <div className="mt-5">
          <h3 className='text-center font-customFont font-outline-05 font-bold text-xl text-white'>If you answered the question, turn the card around and let the next player pick one (every time you turn a card around, a new question will be selected from set of 220 carefully crafted questions).</h3>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
