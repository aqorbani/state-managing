import { createStore } from "redux";
import { cartReducer } from "./cartReducer";

export const store = createStore(cartReducer);

export type RootState = ReturnType<typeof store.getState>;
