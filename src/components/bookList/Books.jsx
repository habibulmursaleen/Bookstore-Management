import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchBooks from "../../redux/booklist/thunk/fetchBooks";
import "../../styles/style.css";
import Book from "./Book";

const Books = () => {
  const books = useSelector((state) => state.books);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks);
  }, [dispatch]);

  const filterByStatus = (book) => {
    const { status } = filters;
    switch (status) {
      case "Featured":
        return book.featured;

      default:
        return true;
    }
  };

  const filterBySearch = (book) => {
    const { searchText } = filters;
    if (searchText?.length > 0) {
      return book.name.toLowerCase().includes(searchText.toLowerCase());
    }
    return true;
  };

  return (
    <div className="lws-bookContainer">
      {books
        .filter(filterByStatus)
        .filter(filterBySearch)
        .map((book) => (
          <Book book={book} key={book.id} />
        ))}
    </div>
  );
};

export default Books;
