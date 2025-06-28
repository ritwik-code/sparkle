import React from "react";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import { categories } from "./Questions";


interface ChooseCategoriesProps {
  selectedCategories: string[];
  includeDeep: boolean;
  onChangeCategories: (categories: string[]) => void;
  onChangeIncludeDeep: (include: boolean) => void;
  onSave: () => void;
}

function ChooseCategories({
  selectedCategories,
  includeDeep,
  onChangeCategories,
  onChangeIncludeDeep,
  onSave,
}: ChooseCategoriesProps) {
  const handleCategoryChange = (category: string) => {
    onChangeCategories(
      selectedCategories.includes(category)
        ? selectedCategories.filter((c) => c !== category)
        : [...selectedCategories, category]
    );
  };

  return (
    <div className='grid h-auto place-items-center mt-5 pb-16'>
      <div className='w-3/4'>
        <div className="pb-14">
            <h2 className='text-center font-outline-05 font-semi-bold md:text-xl xl:text-2xl'>Choose the types of questions from the below categories that you would like to include in the game. You can select multiple categories.</h2>

        </div>
        <div>
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
          </div>
          <div className="text-center mb-2">
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
              onClick={onSave}
            >
              Save & Start Game
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseCategories;
