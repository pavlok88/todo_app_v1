import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Container, LinearProgress, Link } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import AuthBtn from "./AuthBtn";

//============== styles ==============
const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));
//====================================


function Header() {
  const user = useSelector((state) => state.user);
  const todos = useSelector((state) => state.todos);
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link
              href="/"
              onClick={(e) => e.preventDefault}
              color="inherit"
              underline="none"
              component={RouterLink}
              to="/"
            >
              TodoApp
            </Link>
          </Typography>
          {user.userData ? <i>user</i> : <AuthBtn />}
        </Toolbar>
      </Container>
      {user.isFetching || todos.isFetching ? (
        <LinearProgress color="secondary" />
      ) : null}
    </AppBar>
  );
}

export default Header;
