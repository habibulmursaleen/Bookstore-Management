import { updated } from "../actions";

const updateBook = (book) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/books/${book.id}`, {
      method: "PUT",
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
    const updatedBook = await response.json();

    dispatch(updated(updatedBook));
  };
};

export default updateBook;
