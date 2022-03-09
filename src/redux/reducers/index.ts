import { combineReducers } from "redux";
import { gitInfoReducer } from "./gitInfoReducer";

export const rootReducer = combineReducers({
  gitInfo: gitInfoReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
