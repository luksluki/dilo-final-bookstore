import React from "react";
import Book from "./Book";

const BookList = props => {
  const books = props.books;

  const markBook = id => {
    props.onMark(id);
  };

  const deleteBook = id => {
    props.onDelete(id);
  };

  return (
    <div>
      {books.map((book, index) => (
        <div key={index}>
          <Book title={book.title} author={book.author} description={book.description} />
          <div>
            {!book.completed && (
              <button onClick={() => markBook(book._id)}>&#10003;</button>
            )}{" "}
            <button onClick={() => deleteBook(book._id)}>&#x2716;</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
