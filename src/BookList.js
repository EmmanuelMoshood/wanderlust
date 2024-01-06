import React from "react";
import Book from "./Book";

//images
import img1 from "./images/book-1.jpg";
import img2 from "./images/book-2.jpg";
import img3 from "./images/book-3.jpg";

//data set
export const books = [
  {
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: img1,
    id: 1,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: img2,
    id: 2,
  },
  {
    author: "Stephen King",
    title: "Fairy Tale",
    img: img3,
    id: 3,
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: img2,
    id: 4,
  },
  {
    author: "Stephen King",
    title: "Fairy Tale",
    img: "https://images-na.ssl-images-amazon.com/images/I/913KWawg9gL._AC_UL254_SR254,254_.jpg",
    id: 5,
  },
];

//this component will generate a section of books using the provided data
function BookList(props) {
  //function to buy a buy
  const getBook = (id) => {
    const book = books.find((book) => book.id === id);
    alert(`book ${book.id} is being purchased`);
  };
  return (
    <>
      <h1 className="booklist__title"> Amazon best sellers</h1>
      <div className="booklist">
        {books.map((book, index) => {
          return (
            <Book {...book} key={book.id} getBook={getBook} number={index} />
          );
        })}
      </div>
    </>
  );
}

export default BookList;
