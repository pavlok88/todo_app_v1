import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Fab, List } from "@material-ui/core";
import TodoItem from "./TodoItem";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative'
  },
  add: {
    position: 'absolute',
    right: 0,
    bottom: 0
  },
}));

export default function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  const classes = useStyles();
  return (
    <section>
      <Container className={classes.container}>
        <List>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </List>
        <Fab color="secondary" aria-label="add" className={classes.add}>
          <AddIcon />
        </Fab>
      </Container>
    </section>
  );
}
