import { combineReducers } from "redux";
import booksReducer from "./booklist/reducer";
import filterReducer from "./filters/reducer";

const rootReducer = combineReducers({
  books: booksReducer,
  filters: filterReducer,
});

export default rootReducer;
