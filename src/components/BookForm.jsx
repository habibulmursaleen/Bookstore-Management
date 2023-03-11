import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addBooks from "../redux/booklist/thunk/addBooks";
import updateBook from "../redux/booklist/thunk/updateBook";
import "../styles/style.css";

const BookForm = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const selectedBook = books.find((book) => book.selectedBook === true);
  const buttonText = selectedBook ? "Update Book" : "Add Book";

  const [bookData, setBookData] = useState({
    name: "",
    author: "",
    thumbnail: "",
    price: "",
    rating: "",
    featured: false,
  });

  const handleInput = (event) => {
    const { name, value, type, checked } = event.target;
    setBookData({
      ...bookData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  useEffect(() => {
    if (selectedBook) {
      setBookData(selectedBook);
    }
  }, [selectedBook]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedBook) {
      dispatch(updateBook(bookData));
    } else {
      dispatch(addBooks(bookData));
    }
    setBookData({
      name: "",
      author: "",
      thumbnail: "",
      price: "",
      rating: "",
      featured: false,
    });
  };

  return (
    <div>
      <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
        <h4 className="mb-8 text-xl font-bold text-center">
          {selectedBook ? "Edit Book" : "Add New Book"}
        </h4>
        <form className="book-form" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="name">Book Name</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookname"
              name="name"
              onChange={handleInput}
              value={bookData.name}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="category">Author</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookauthor"
              name="author"
              onChange={handleInput}
              value={bookData.author}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="image">Image Url</label>
            <input
              required
              className="text-input"
              type="text"
              id="input-Bookthumbnail"
              name="thumbnail"
              value={bookData.thumbnail}
              onChange={handleInput}
            />
          </div>

          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="price">Price</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookprice"
                name="price"
                value={bookData.price}
                onChange={handleInput}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="quantity">Rating</label>
              <input
                required
                className="text-input"
                type="number"
                id="input-Bookrating"
                name="rating"
                value={bookData.rating}
                min="1"
                max="5"
                onChange={handleInput}
              />
            </div>
          </div>

          <div className="flex items-center">
            <input
              id="input-Bookfeatured"
              type="checkbox"
              name="featured"
              checked={bookData.featured}
              className="w-4 h-4"
              onChange={handleInput}
            />
            <label htmlFor="featured" className="ml-2 text-sm">
              {" "}
              This is a featured book{" "}
            </label>
          </div>

          <button type="submit" className="submit" id="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookForm;
