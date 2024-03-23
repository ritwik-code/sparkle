import React from 'react';
import questionsData from './Questions';
import CategoryPanel from './CategoryPanel';



const GamePage: React.FC = () => {

    return (
        <div className='md:py-10 sm:py-32'>
            <div className='grid h-auto place-items-center'>
                <div className="container my-8 mx-auto">
                    <div className='max-sm:flex justify-around'>
                        <div className='mx-1'>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-customFont font-bold text-center text-black mb-2">Build Relationships</h2>
                            <div className='flex justify-center'>
                                <CategoryPanel questions={questionsData["BuildRelationships"]} ></CategoryPanel>
                            </div>
                        </div>
                        <div className='mx-1'>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-customFont font-bold text-center text-black mb-2">Deepen Relationships</h2>
                            <div className='flex justify-center'>
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
