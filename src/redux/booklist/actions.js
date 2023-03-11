import { ADDED, DELETED, LOADED, SELECTED, UPDATED } from "./actionTypes";

export const loaded = (books) => {
  return {
    type: LOADED,
    payload: books,
  };
};

export const added = (book) => {
  return {
    type: ADDED,
    payload: book,
  };
};

export const updated = (book) => {
  return {
    type: UPDATED,
    payload: book,
  };
};

export const selectedBook = (bookId) => {
  return {
    type: SELECTED,
    payload: bookId,
  };
};

export const deleted = (bookId) => {
  return {
    type: DELETED,
    payload: bookId,
  };
};
