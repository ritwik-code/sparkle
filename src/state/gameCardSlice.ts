import { createSlice } from "@reduxjs/toolkit";
import QuestionsData from "../components/Questions";

class GameCard {
    question1: number;
    question2: number;
    question3: number;
    flip: boolean[];

    constructor(q: number[]) {
        this.question1 = q[0];
        this.question2 = q[1];
        this.question3 = q[2];
        this.flip = [true, true, true];
    }
}

const initialState: GameCard = new GameCard(generateUniqueRandomNumbers(3, 110));


//array with 3 uniques random bits;
//Init array
//on true to false -> update state by generating new random number
function generateUniqueRandomNumbers(n: number, l: number): number[] {
    console.log("here");
    const randomNumbers: Set<number> = new Set();
    while (randomNumbers.size < n) {
        const randomNumber = Math.floor(Math.random() * (l + 1));
        randomNumbers.add(randomNumber);
    }
    console.log(Array.from(randomNumbers));
    return Array.from(randomNumbers);
}

const buildGameCardSlice = createSlice({
    name: "buildGameCard",
    initialState,
    reducers: {
        flipCard: (state, actions) => {
            return{
                ...state,
                flip:actions.payload
            }
         },
        generateQuestion1: (state) => {
            return {
                ...state,
                question1: generateNewQuestionId(state.question1, state.question2, state.question3)
            }
        },
        generateQuestion2: (state) => {
            return {
                ...state,
                question2: generateNewQuestionId(state.question1, state.question2, state.question3)
            }

        },
        generateQuestion3: (state) => {
            return {
                ...state,
                question3: generateNewQuestionId(state.question1, state.question2, state.question3)
            }
        }
    }
}
)

function generateNewQuestionId(card1: number, card2: number, card3: number) {
    let randomNumber = Math.floor(Math.random() * (50));
    while (randomNumber === card1 || randomNumber === card2 || randomNumber === card3) {
        randomNumber = Math.floor(Math.random() * (50));
    }
    return randomNumber;
}

export const { flipCard, generateQuestion1, generateQuestion2, generateQuestion3 } = buildGameCardSlice.actions;
export default buildGameCardSlice.reducer;