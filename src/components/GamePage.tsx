import React from 'react';
import questionsData from './Questions';
import CategoryPanel from './CategoryPanel';
import { Steps } from 'intro.js-react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { hideRules } from '../state/gameCardSlice';


const GamePage: React.FC = () => {
    const closeSteps = () => { dispatch(hideRules()) }
    const areRulesVisible = useSelector((state: RootState) => state.gameCard.areRulesVisible);


    const dispatch = useDispatch();
    return (
        
        <div className='md:py-10 sm:py-32'>
            <Steps
                    enabled={areRulesVisible}
                    
                    steps={[
                        {
                            element: ".buildRelationships",
                            intro: "Build relationship cards have surface level questions; Easier to answer."
                        },
                        {
                            element: ".deepenRelationships",
                            intro: "Deepen relationship cards have deeper questions; Might be tougher to answer."
                        },
                        {
                            element: ".cards",
                            intro: "Pick a card from the 3, cards have incrementally tougher questions; 3rd being the toughest"
                        },
                        {
                            element: ".game",
                            intro: "If you picked a question and you feel uncomfortable to answer it, skip as many times as you need."
                        },
                        {
                            element: ".game",
                            intro: "If you answered the question, turn the card around and let the next player pick one (every time you turn a card around, a new question will be selected from set of 220 carefully crafted questions)."
                        }
                    ]}
                    initialStep={0}
                    onExit={closeSteps}
                ></Steps>
            <div className='game grid h-auto place-items-center'>
                <div className="container my-8 mx-auto">
                    <div className='buildRelationships max-sm:flex justify-around'>
                        <div className='mx-1'>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-customFont font-bold text-center text-black mb-2">Build Relationships</h2>
                            <div className='cards flex justify-center'>
                                <CategoryPanel questions={questionsData["BuildRelationships"]} ></CategoryPanel>
                            </div>
                        </div>
                        <div className='deepenRelationships mx-1'>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-customFont font-bold text-center text-black mb-2">Deepen Relationships</h2>
                            <div className='cards flex justify-center'>
                                <CategoryPanel questions={questionsData["DeepenRelationships"]}></CategoryPanel>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default GamePage;