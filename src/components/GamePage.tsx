import React from 'react';
import questionsData from './Questions';
import CategoryPanel from './CategoryPanel';
import { Steps } from 'intro.js-react';
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import { hideRules } from '../state/gameCardSlice';
const shuffleArray = (array: any[]) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
};

function generateUniqueRandomNumbers(n: number, l: number): number[] {
    const randomNumbers: Set<number> = new Set();
    while (randomNumbers.size < n) {
        const randomNumber = Math.floor(Math.random() * (l + 1));
        randomNumbers.add(randomNumber);
    }
    console.log(Array.from(randomNumbers));
    return Array.from(randomNumbers);
}

const GamePage: React.FC = () => {
    const closeSteps = () => { dispatch(hideRules()) }
    const areRulesVisible = useSelector((state: RootState) => state.gameCard.areRulesVisible);
    const dispatch = useDispatch();

    return (
        <div className='py-28 sm:py-32'>
            <Steps
                enabled={areRulesVisible}

                steps={[
                    {
                        element: ".buildRelationships",
                        intro: "Build relationship cards have surface level questions; Easier to answer.",
                        position: "right"
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
                    <div className='max-sm:flex justify-around'>
                        <div className='buildRelationships mx-1'>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-customFont font-bold text-center text-black mb-2">Build Relationships</h2>
                            <div className='cards flex justify-center'>
                                <CategoryPanel questions={shuffleArray(questionsData["BuildRelationships"])} randomArr={generateUniqueRandomNumbers(3, questionsData["BuildRelationships"].length - 1)}></CategoryPanel>
                            </div>
                        </div>
                        <div className='mx-1'>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-customFont font-bold text-center text-black mb-2">Deepen Relationships</h2>
                            <div className='cards flex justify-center'>
                                <CategoryPanel questions={shuffleArray(questionsData["DeepenRelationships"])} randomArr={generateUniqueRandomNumbers(3, questionsData["DeepenRelationships"].length - 1)}></CategoryPanel>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default GamePage;