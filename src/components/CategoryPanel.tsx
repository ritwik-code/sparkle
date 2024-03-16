import React from "react";
import ReactCardFlip from "react-card-flip";
import CardBack from "../resources/card.jpg";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { flipCard, generateQuestion1, generateQuestion2, generateQuestion3 } from "../state/gameCardSlice";

interface CategoryProps {
    questions: string[];
}

const CategoryPanel: React.FC<CategoryProps> = ({ questions}) => {
    const flipFlag = useSelector((state:RootState)=> state.gameCard.flip)
    const q1 = useSelector((state: RootState) => state.gameCard.question1);
    const q2 = useSelector((state: RootState) => state.gameCard.question2);
    const q3 = useSelector((state: RootState) => state.gameCard.question3);


    const dispatch = useDispatch();

    function timeout(delay: number) {
        return new Promise(res => setTimeout(res, delay));
    }

    return (
        <div className="card w-3/4">
            <div className="flex flex-col sm:flex-row justify-evenly mb-4">
                <ReactCardFlip flipDirection="horizontal" isFlipped={flipFlag[0]}>
                    <div className="card" onClick={() => dispatch(flipCard([!flipFlag[0],flipFlag[1],flipFlag[2]]))}>
                        <div className="border-4 border-black  grid place-items-center w-40 h-28 lg:w-60 lg:h-40  bg-black/90 p-1 rounded shadow-2xl mb-2" style={{ cursor: 'pointer' }}>
                            <p className='text-white text-xs lg:text-lg font-semibold text-center'>{questions[q1]}</p>
                        </div>
                    </div>
                    <div className="card card-back" onClick={() => { dispatch(flipCard([!flipFlag[0],flipFlag[1],flipFlag[2]])); timeout(300); dispatch(generateQuestion1()) }}>
                        <div className="flex w-40 h-28 lg:w-60 lg:h-40  shadow-5xl mb-2 " style={{ cursor: 'pointer' }}>
                            <img className="flex w-40 h-28 lg:w-60 lg:h-40" alt="Sparkler" src={CardBack}></img>
                        </div>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip flipDirection="horizontal" isFlipped={flipFlag[1]}>
                    <div className="card" onClick={() => dispatch(flipCard([flipFlag[0],!flipFlag[1],flipFlag[2]]))}>
                        <div className="border-4 border-black  grid place-items-center w-40 h-28 lg:w-60 lg:h-40  bg-black/90 p-1 rounded shadow-2xl mb-2" style={{ cursor: 'pointer' }}>
                            <p className='text-white text-xs lg:text-lg font-semibold text-center'>{questions[q2]}</p>
                        </div>
                    </div>
                    <div className="card card-back" onClick={() => { dispatch(flipCard([flipFlag[0],!flipFlag[1],flipFlag[2]])); timeout(300); dispatch(generateQuestion2()) }}>
                        <div className="flex w-40 h-28 lg:w-60 lg:h-40  shadow-5xl mb-2" style={{ cursor: 'pointer' }}>
                            <img className="flex w-40 h-28 lg:w-60 lg:h-40" alt="Sparkler" src={CardBack}></img>
                        </div>
                    </div>
                </ReactCardFlip>
                <ReactCardFlip flipDirection="horizontal" isFlipped={flipFlag[2]}>
                    <div className="card" onClick={() => dispatch(flipCard([flipFlag[0],flipFlag[1],!flipFlag[2]]))}>
                        <div className="border-4 border-black grid place-items-center w-40 h-28 lg:w-60 lg:h-40  bg-black/90 p-1 rounded shadow-2xl mb-2" style={{ cursor: 'pointer' }}>
                            <p className='text-center text-xs lg:text-lg font-semibold text-white'>{questions[q3]}</p>
                        </div>
                    </div>
                    <div className="card card-back" onClick={() => { dispatch(flipCard([flipFlag[0],flipFlag[1],!flipFlag[2]])); timeout(300); dispatch(generateQuestion3()) }}>
                        <div className="flex w-40 h-28 lg:w-60 lg:h-40 shadow-5xl mb-2" style={{ cursor: 'pointer' }}>
                            <img className="flex w-40 h-28 lg:w-60 lg:h-40" alt="sparkler" src={CardBack}></img>
                        </div>
                    </div>
                </ReactCardFlip>
            </div>
        </div>
    );
};

export default CategoryPanel;
