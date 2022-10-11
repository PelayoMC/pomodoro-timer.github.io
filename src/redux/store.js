import { Timer } from "./timer";
import { createStore, combineReducers } from "redux";

export const ConfigureStore = () => {
    const store = createStore(
      combineReducers({
        timer: Timer
      }),
    );
    return store;
  };