import { added } from "../actions";

const addBooks = (book) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:9000/books", {
      method: "POST",
      body: JSON.stringify({
        name: book.name,
        author: book.author,
        thumbnail: book.thumbnail,
        price: book.price,
        rating: book.rating,
        featured: book.featured,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const newBook = await response.json();

    dispatch(added(newBook));
  };
};

export default addBooks;
