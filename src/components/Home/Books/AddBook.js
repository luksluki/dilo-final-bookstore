import React, { useState } from "react";

const AddBook = props => {
  const [book, setBook] = useState("");

  const handleAddBook = e => {
    props.onAdd(book);
    setBook("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Masukan Judul Buku ..."
        value={book}
        onChange={e => setBook(e.target.value)}
      />
      <button type="submit" onClick={() => handleAddBook()}>
        Add Book
      </button>
    </div>
  );
};

export default AddBook;
