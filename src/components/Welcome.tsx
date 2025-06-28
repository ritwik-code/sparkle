import React from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { categories } from "./Questions";

interface WelcomeProps {
  selectedCategories: string[];
  includeDeep: boolean;
  onChangeCategories: (categories: string[]) => void;
  onChangeIncludeDeep: (include: boolean) => void;
  onStartGame: () => void;
}

function Welcome({
  selectedCategories,
  includeDeep,
  onChangeCategories,
  onChangeIncludeDeep,
  onStartGame,
}: WelcomeProps) {
  const handleCategoryChange = (category: string) => {
    onChangeCategories(
      selectedCategories.includes(category)
        ? selectedCategories.filter((c) => c !== category)
        : [...selectedCategories, category]
    );
  };

  return (
    <div className='mt-5 pb-16'>
      <div className='grid h-auto place-items-center'>

        <div className='w-3/4'>
          <div className=" pb-14">
            <div className="mt-5">
              <h2 className='text-center font-outline-05 font-semi-bold md:text-xl xl:text-2xl'>Welcome to Sparkle, the card game that invites you and your fellow players to build and deepen interpersonal relationships.
                The game is designed to create a safe and trusting environment where you can open up and share your thoughts, experiences and feelings, and in doing so, build mutual support and trust among your team members.</h2>
            </div>
            <div className="mt-5">
              <h2 className='text-center font-outline-05 font-semi-bold md:text-xl xl:text-2xl'>Each card contains a question or statement that encourages you to think about a specific topic and share
                your thoughts and experiences on it. The questions are formulated in such a way that they help you get to know yourself better while also understanding your team members better.</h2>
            </div>
          </div>
          <div>

            <div className="text-center mb-2">
                        <h2 className='text-center font-outline-05 font-semi-bold md:text-xl xl:text-2xl'>Choose the types of questions from the below categories that you would like to include in the game. You can select multiple categories.</h2>
            </div>
            <FormGroup row className="justify-center items-center mb-4">
              {categories.map((category: string) => (
                <FormControlLabel
                  key={category}
                  control={
                    <Checkbox
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                    />
                  }
                  label={
                    <span className='font-outline-05 font-semi-bold md:text-xl xl:text-2xl'>{category}</span>
                  }
                />
              ))}
            </FormGroup>
                    <h2 className='text-center font-outline-05 font-semi-bold md:text-xl xl:text-2xl'>Please be mindful when including Deep questions. The Questions in this category tend to be more personal - Aiming to deepen relationships</h2>

            <div className="flex justify-center mb-4">
              <FormControlLabel
                control={
                  <Checkbox
                    checked={includeDeep}
                    onChange={() => onChangeIncludeDeep(!includeDeep)}
                  />
                }
                label={<span className='font-outline-05 font-semi-bold md:text-xl xl:text-2xl'>Include Deep Questions</span>}
              />
            </div>
            <div className="flex justify-center">
              <button
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-xl font-bold"
                onClick={onStartGame}
              >
                Start Game
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
