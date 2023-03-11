import React from "react";
import "../../styles/style.css";
import Books from "./Books";
import Featured from "./Featured";

const BookList = () => {
  return (
    <div className="order-2 xl:-order-1">
      <Featured />
      <Books />
    </div>
  );
};

export default BookList;
