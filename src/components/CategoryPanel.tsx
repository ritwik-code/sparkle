import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import CardBack from "../resources/card.jpg";

interface CategoryProps {
    questions: string[];
    randomArr: number[];
}

const CategoryPanel: React.FC<CategoryProps> = ({ questions, randomArr }) => {

    const [isFlipped1, setIsFlipped1] = useState(true);
    const [isFlipped2, setIsFlipped2] = useState(true);
    const [isFlipped3, setIsFlipped3] = useState(true);

    //array with 3 uniques random bits;
    //Init array
    //on true to false -> update state by generating new random number


    const [question1, setQuestion1] = useState(randomArr[0]);
    const [question2, setQuestion2] = useState(randomArr[1]);
    const [question3, setQuestion3] = useState(randomArr[2]);

    function generateNewQuestionId(card1: number, card2: number, card3: number) {
        let randomNumber = Math.floor(Math.random() * (questions.length));
        while (randomNumber === card1 || randomNumber === card2 || randomNumber === card3) {
            randomNumber = Math.floor(Math.random() * (questions.length));
        }
        return randomNumber;
    }
    function timeout(delay: number) {
        return new Promise(res => setTimeout(res, delay));
    }

    async function flipCard1() {
        setIsFlipped1(!isFlipped1);

        if (!isFlipped1) {
            await timeout(300);
            setQuestion1(generateNewQuestionId(question1, question2, question3));
        }
    }
    async function flipCard2() {
        setIsFlipped2(!isFlipped2);
        if (!isFlipped2) {
            await timeout(300);
            setQuestion2(generateNewQuestionId(question1, question2, question3));
        }
    }
    async function flipCard3() {
        setIsFlipped3(!isFlipped3);
        if (!isFlipped3) {
            await timeout(300);
            setQuestion3(generateNewQuestionId(question1, question2, question3));
        }
    }
    return (
        <div className="card w-3/4 ">
            <div className="flex justify-evenly mb-4">
                <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped1}>
                    <div className="card" onClick={flipCard1}>
                        <div className="border-4 border-black  grid place-items-center w-60 h-40  bg-black/90 p-1 rounded shadow-2xl mb-2" style={{ cursor: 'pointer' }}>
                            <p className='text-white font-semibold text-center'>{questions[question1]}</p>
                        </div>
                    </div>
                    <div className="card card-back" onClick={flipCard1}>
                        <div className="flex w-60 h-40  shadow-5xl mb-2" style={{ cursor: 'pointer' }}>
                            <img className="flex w-60 h-40" src={CardBack}></img>
                        </div>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped2}>
                    <div className="card" onClick={flipCard2}>
                        <div className="border-4 border-black  grid place-items-center w-60 h-40  bg-black/90 p-1 rounded shadow-2xl mb-2" style={{ cursor: 'pointer' }}>
                            <p className='text-white font-semibold text-center'>{questions[question2]}</p>
                        </div>
                    </div>
                    <div className="card card-back" onClick={flipCard2}>
                        <div className="flex w-60 h-40  shadow-5xl mb-2" style={{ cursor: 'pointer' }}>
                            <img className="flex w-60 h-40" src={CardBack}></img>
                        </div>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip flipDirection="horizontal" isFlipped={isFlipped3}>
                    <div className="card" onClick={flipCard3}>
                        <div className="border-4 border-black grid place-items-center w-60 h-40  bg-black/90 p-1 rounded shadow-2xl mb-2" style={{ cursor: 'pointer' }}>
                            <p className='text-center font-semibold text-white'>{questions[question3]}</p>
                        </div>
                    </div>
                    <div className="card card-back" onClick={flipCard3}>
                        <div className="flex w-60 h-40  shadow-5xl mb-2" style={{ cursor: 'pointer' }}>
                            <img className="flex w-60 h-40" src={CardBack}></img>
                        </div>
                    </div>
                </ReactCardFlip>
            </div>
        </div>
    );
};

export default CategoryPanel;
