import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import questionsData from './Questions';
import ReactCardFlip from 'react-card-flip';
import CardBack from '../resources/card.png';

const categoryKeys = [
  'Life Experiences',
  'Self-Reflection',
  'Professional Growth',
  'Miscellaneous',
] as const;
type CategoryKey = typeof categoryKeys[number];

const shuffleArray = (array: any[]) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
};

const GamePage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const selectedCategories: string[] = React.useMemo(() => location.state?.selectedCategories || [], [location.state]);
    // Get includeDeep from navigation state, default to true if undefined
    const includeDeep: boolean = location.state && typeof location.state.includeDeep === 'boolean' ? location.state.includeDeep : true;

    React.useEffect(() => {
        if (!selectedCategories.length) {
            navigate('/', { replace: true });
        }
    }, [selectedCategories, navigate]);

console.log("Selected Categories:", selectedCategories);
console.log("include deep:", includeDeep);

    // Evenly distribute questions from selected categories
    const numCards = 6;
    const numCategories = selectedCategories.length;
    const questionsToShow: { question: any, category: string }[] = React.useMemo(() => {
        let result: { question: any, category: string }[] = [];
        if (numCategories > 0) {
            // Calculate base and remainder for even distribution
            const base = Math.floor(numCards / numCategories);
            let remainder = numCards % numCategories;
            selectedCategories.forEach((cat) => {
                let catQuestions = shuffleArray(questionsData[cat as CategoryKey] || []);
                console.log(`Category: ${cat}, Questions: ${catQuestions.length}`);
                if (!includeDeep) {
                    console.log("Excluding deep questions");
                    catQuestions = catQuestions.filter(q => !q.deep);
                }
                let take = base + (remainder > 0 ? 1 : 0);
                remainder = Math.max(0, remainder - 1);
                result = result.concat(
                    catQuestions.slice(0, take).map(q => ({ question: q, category: cat }))
                );
            });
            result = shuffleArray(result).slice(0, numCards);
        }
        return result;
    }, [selectedCategories, includeDeep]);
    const rows = [questionsToShow.slice(0, 3), questionsToShow.slice(3, 6)];

    // State for flip and question index for each card
    const [flipped, setFlipped] = useState(Array(numCards).fill(true));
    const [cardQuestions, setCardQuestions] = useState(questionsToShow);

    // Sync cardQuestions and flipped state when questionsToShow changes
    React.useEffect(() => {
        setCardQuestions(questionsToShow);
        setFlipped(Array(numCards).fill(true));
    }, [questionsToShow, numCards]);

    // Helper to get a new random question from the same category (not repeating current)
    function getNewQuestion(category: string, currentQ: any) {
        let catQuestions = questionsData[category as CategoryKey] || [];
        if (!includeDeep) {
            catQuestions = catQuestions.filter(q => !q.deep);
        }
        const filtered = catQuestions.filter(q => q.question !== currentQ.question);

        if (filtered.length === 0) return currentQ;
        return filtered[Math.floor(Math.random() * filtered.length)];
    }

    const handleFlip = (cardIdx: number) => {
        setFlipped((prev) => {
            const newFlipped = [...prev];
            newFlipped[cardIdx] = !newFlipped[cardIdx];
            return newFlipped;
        });
        // If flipping back to card back, change the question
        if (!flipped[cardIdx]) {
            setTimeout(() => {
                setCardQuestions((prev) => {
                    const newQuestions = [...prev];
                    const qObj = newQuestions[cardIdx];
                    newQuestions[cardIdx] = {
                        question: getNewQuestion(qObj.category, qObj.question),
                        category: qObj.category
                    };
                    return newQuestions;
                });
            }, 300); // match flip animation duration
        }
    };

    return (
        <div className='game grid h-auto place-items-center'>
            <div className="container my-8 mx-auto">
                <div className='max-sm:flex-col justify-around'>
                    <div className='buildRelationships mx-1'>
                        <div className='cards'>
                            {rows.map((row, rowIdx) => (
                                <div key={rowIdx} className="flex flex-wrap justify-center mb-8 gap-6">
                                    {row.map((qObj, idx) => {
                                        const cardIdx = rowIdx * 3 + idx;
                                        const q = cardQuestions[cardIdx]?.question || qObj.question;
                                        const category = cardQuestions[cardIdx]?.category || qObj.category;
                                        return (
                                            <ReactCardFlip
                                                key={cardIdx}
                                                isFlipped={!flipped[cardIdx]}
                                                flipDirection="horizontal"
                                            >
                                                {/* Card Back */}
                                                <div
                                                    className="flex w-44 h-36 sm:w-56 sm:h-40 md:w-64 md:h-48 lg:w-72 lg:h-56 shadow-5xl cursor-pointer items-center justify-center rounded border-4 border-black bg-black/90 mx-4"
                                                    onClick={() => handleFlip(cardIdx)}
                                                    style={{ background: 'none', minWidth: '11rem', minHeight: '10rem' }}
                                                >
                                                    <img className="w-44 h-36 sm:w-56 sm:h-40 md:w-64 md:h-48 lg:w-72 lg:h-56 object-contain mx-auto bg-black" alt="sparkler" src={CardBack} />
                                                </div>
                                                {/* Card Front */}
                                                <div
                                                    className={`border-4 border-black flex flex-col justify-between w-44 h-36 sm:w-56 sm:h-40 md:w-64 md:h-48 lg:w-72 lg:h-56 p-2 rounded shadow-2xl relative cursor-pointer bg-clip-padding overflow-y-auto mx-4 ${q.deep ? 'bg-yellow-400' : 'bg-black/90'}`}
                                                    onClick={() => handleFlip(cardIdx)}
                                                    style={{ minWidth: '11rem', minHeight: '10rem' }}
                                                >
                                                    <div className="flex-grow min-h-0 flex items-center justify-center overflow-y-auto">
                                                        <p className={`text-xs sm:text-sm md:text-base lg:text-lg font-semibold text-center break-words ${q.deep ? 'text-black' : 'text-white'}`}>{q.question}</p>
                                                    </div>
                                                    <div className="w-full flex flex-col items-center pb-1">
                                                        <span className={`text-xs sm:text-sm md:text-base font-bold ${q.deep ? 'text-black' : 'text-white'}`}>{category}</span>
                                                        {q.deep && <span className="text-xs sm:text-sm font-bold text-red-700">(Deep Question)</span>}
                                                    </div>
                                                </div>
                                            </ReactCardFlip>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GamePage;