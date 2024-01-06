import React from "react";
import "./Book.css";
import BookList from "./BookList";

function Book(props) {
  const { img, title, author, getBook, id, number } = props;

  const callGetBook = () => {
    getBook(id);
  };

  return (
    <div className="book__container">
      <img src={img} alt={title} className="book__image" />
      <h2 className="book__title">{title}</h2>
      <p className="book__author">{author}</p>
      <button onClick={callGetBook}>Buy</button>
      <div className="number">#{number + 1}</div>
    </div>
  );
}

export default Book;
