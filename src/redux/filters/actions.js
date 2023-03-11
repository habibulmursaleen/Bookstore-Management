import { FILTERED_BOOKS, SEARCH_TEXT, STATUSCHANGED } from "./actionTypes";

export const statusChanged = (status) => {
  return {
    type: STATUSCHANGED,
    payload: status,
  };
};

export const filteredBooks = (books) => {
  return {
    type: FILTERED_BOOKS,
    payload: books,
  };
};

export const searchText = (text) => {
  return {
    type: SEARCH_TEXT,
    payload: text,
  };
};
