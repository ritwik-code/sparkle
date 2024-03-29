import React from 'react';
import questionsData from './Questions';
import CategoryPanel from './CategoryPanel';

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
    return Array.from(randomNumbers);
}

const GamePage: React.FC = () => {
    return (
        <div>
            <div className='game grid h-auto place-items-center'>
                <div className="container my-8 mx-auto">
                    <div className='max-sm:flex-col justify-around'>
                        <div className='buildRelationships mx-1'>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-customFont font-bold text-center text-black mb-2">Build Relationships</h2>
                            <div className='cards flex justify-center mr-auto ml-auto'>
                                <CategoryPanel questions={shuffleArray(questionsData["BuildRelationships"])} randomArr={generateUniqueRandomNumbers(3, questionsData["BuildRelationships"].length - 1)}></CategoryPanel>
                            </div>
                        </div>
                        <div className='deepenRelationships mx-1'>
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