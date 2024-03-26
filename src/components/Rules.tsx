
function Rules() {
    return (
        <div className="grid h-auto place-items-center mt-5 pb-16">
            <div className="w-3/4 ">
                <h2 className='text-center font-customFont font-outline-05 font-bold text-2xl md:text-3xl lg:text-4xl'>GROUND RULES</h2>
                <ul className="list-disc list-inside mt-5">
                    <li className='text-center font-outline-05 font-semi-bold md:text-xl xl:text-2xl'>To ensure a trustful environment,
                        answers may not leave this (virtual) room.</li>
                    <li className='text-center font-outline-05 font-semi-bold md:text-xl xl:text-2xl '>No written answers, no recording.</li>
                    <li className='text-center font-outline-05 font-semi-bold md:text-xl xl:text-2xl '>If you picked a question and you feel uncomfortable to answer it,
                        skip as many times as you need.</li>
                    <li className='text-center font-outline-05 font-semi-bold md:text-xl xl:text-2xl '>If you answered the question, turn the card around and let the
                        next player pick one (every time you turn a card around, a new question will be selected from set of 220 carefully crafted questions).</li>
                </ul>
            </div>
        </div>
    )

}

export default Rules;