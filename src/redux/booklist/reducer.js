import { ADDED, DELETED, LOADED, SELECTED, UPDATED } from "./actionTypes";
import initialState from "./initialState";

const nextBookId = (books) => {
  const maxId = books.reduce((maxId, book) => Math.max(book.id, maxId), -1);
  return maxId + 1;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADED:
      return action.payload;

    case ADDED:
      return [
        ...state,
        {
          id: nextBookId(state),
          name: action.payload.name,
          author: action.payload.author,
          thumbnail: action.payload.thumbnail,
          price: action.payload.price,
          rating: action.payload.rating,
          featured: action.payload.featured,
        },
      ];

    case SELECTED:
      return state.map((book) => {
        if (book.id !== action.payload) {
          return { ...book, selectedBook: false };
        }
        return {
          ...book,
          selectedBook: true,
        };
      });

    case UPDATED:
      return state.map((book) => {
        if (book.id !== action.payload.id) {
          return book;
        }
        return {
          ...book,
          name: action.payload.name,
          author: action.payload.author,
          thumbnail: action.payload.thumbnail,
          price: action.payload.price,
          featured: action.payload.featured,
          selectedBook: false,
        };
      });

    case DELETED:
      return state.filter((book) => book.id !== action.payload);

    default:
      return state;
  }
};

export default reducer;
