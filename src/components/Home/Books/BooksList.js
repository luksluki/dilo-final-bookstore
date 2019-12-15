import React from "react";
import Book from "./Book";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

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
      <Grid container spacing={3} alignContent="center">
        {books.map((book, index) => (
          <Grid item xs={12} md={4} key={index}>
            <Book
              title={book.title}
              description={book.description}
              category={book.category}
              price={book.price}
              bookImage={book.bookImage}
              stock={book.stock}
              author={book.author}
              index={index}
            />
            {/* <div>
            {!book.completed && (
              <button onClick={() => markBook(book._id)}>&#10003;</button>
            )}{" "}
            <button onClick={() => deleteBook(book._id)}>&#x2716;</button>
          </div> */}
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  card: {
    maxWidth: 345
  }
}));

export default BookList;
