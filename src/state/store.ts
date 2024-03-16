import { configureStore } from "@reduxjs/toolkit";
import gameCardReducer from "./gameCardSlice";

export const store = configureStore({
    reducer: { gameCard: gameCardReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
