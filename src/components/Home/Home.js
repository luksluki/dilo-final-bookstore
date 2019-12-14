import axios from "axios";
import React, { useEffect, useState } from "react";
import AddBook from "./Books/AddBook";
import Search from "./Books/Search";
import BookList from "./Books/BooksList";
import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";
// import Grid from "@material-ui/core/Grid";
// import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
// import CardActions from "@material-ui/core/CardActions";
// import CardContent from "@material-ui/core/CardContent";
// import CardMedia from "@material-ui/core/CardMedia";
// import Button from "@material-ui/core/Button";
// import Typography from "@material-ui/core/Typography";

const Home = () => {
  //  const classes = useStyles();
  const userData = window.localStorage.getItem("userData")
    ? JSON.parse(window.localStorage.getItem("userData"))
    : {};
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  axios.defaults.headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${userData.token}`
  };

  const onAddBook = async description => {
    await axios.post("http://localhost:3000/books", {
      description,
      completed: false
    });
    fetchData();
  };

  const onSearchBook = searchText => {
    setSearch(searchText);
  };

  async function fetchData() {
    const request = await axios.get("http://localhost:3000/books");
    const data = request.data;
    setBooks(data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const onDelete = async id => {
    await axios.delete(`http://localhost:3000/books/${id}`);
    fetchData();
  };

  const onMark = async id => {
    await axios.patch(`http://localhost:3000/books/${id}`, {
      completed: true
    });
    fetchData();
  };

  const filteredBooks = books.filter(book => {
    return book.description.toLowerCase().includes(search.toLowerCase());
  });

  // const doneBooks = books.filter(book => {
  //   return book.completed;
  // });

  return (
    <div>
      <h3>Total Book : {filteredBooks.length}</h3>
      <Search onSearch={onSearchBook} />
      <BookList books={filteredBooks} onDelete={onDelete} onMark={onMark} />
      <AddBook onAdd={onAddBook} />
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

export default Home;
