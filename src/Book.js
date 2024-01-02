import React from "react";
import "./Book.css";

function Book() {
  return (
    <div className="book__container">
      <img
        src="https://m.media-amazon.com/images/I/71lcO4DfPsL._SL1500_.jpg"
        alt="poster"
        className="book__image"
      />
      <h2 className="book__title">Enemies of my country</h2>
      <p className="book__author">Basket Mouth</p>
    </div>
  );
}

export default Book;
