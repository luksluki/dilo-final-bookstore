import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Auth/Login";
// import Cart from "./components/Cart/ShoppingInBasket";
import "./App.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  btnMargin: {
    marginLeft: theme.spacing(2)
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

const App = () => {
  const [data, setData] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const userData = window.localStorage.getItem("userData")
      ? setData(JSON.parse(window.localStorage.getItem("userData")))
      : null;
  }, []);

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
            >
              <MenuIcon />
            </IconButton>

            <Typography className={classes.title} variant="h6" noWrap>
              <div component={NavLink} to="/" color="inherit">
                Bookstore
              </div>
            </Typography>

            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
            <IconButton
              component={NavLink}
              to="Cart"
              className={classes.btnMargin}
              color="inherit"
              aria-label="add to shopping cart"
            >
              <AddShoppingCartIcon />
            </IconButton>
            {data ? (
              <Button
                component={NavLink}
                to="/login"
                className={classes.btnMargin}
                color="inherit"
              >
                Log In / Sign Up
              </Button>
            ) : (
              <Button
                component={NavLink}
                to="/logout"
                className={classes.btnMargin}
                color="inherit"
              >
                Log Out
              </Button>
            )}
          </Toolbar>
        </AppBar>
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

// const App = () => {
//   const [data, setData] = useState(null);
//   const classes = useStyles();
//   return (
//     <BrowserRouter>
//       <div className={classes.root}>
//         <AppBar position="static">
//           <Toolbar>
//             <IconButton
//               edge="start"
//               className={classes.menuButton}
//               color="inherit"
//               aria-label="open drawer"
//             >
//               <MenuIcon />
//             </IconButton>

//             <Typography className={classes.title} variant="h6" noWrap>
//               <div component={NavLink} to="/" color="inherit">
//                 Bookstore
//               </div>
//             </Typography>

//             <div className={classes.search}>
//               <div className={classes.searchIcon}>
//                 <SearchIcon />
//               </div>
//               <InputBase
//                 placeholder="Search…"
//                 classes={{
//                   root: classes.inputRoot,
//                   input: classes.inputInput
//                 }}
//                 inputProps={{ "aria-label": "search" }}
//               />
//             </div>
//             <IconButton
//               className={classes.btnMargin}
//               color="inherit"
//               aria-label="add to shopping cart"
//             >
//               <AddShoppingCartIcon />
//             </IconButton>
//             <Button
//               component={NavLink}
//               to="/login"
//               className={classes.btnMargin}
//               color="inherit"
//             >
//               Log In / Sign Up
//             </Button>
//           </Toolbar>
//         </AppBar>
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/login" component={Login} />
//         </Switch>
//       </div>
//     </BrowserRouter>
//   );
// };

export default App;
