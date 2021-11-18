import { createForms } from "react-redux-form";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { Dishes } from "./dishes";
import { Promotions } from "./promotions";
import { Leaders } from "./leaders";
import { Comments } from "./comments";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { IntialFeedback } from "./forms";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promotions,
      leaders: Leaders,
      ...createForms({ feedback: IntialFeedback }),
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
