import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  TextField,
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { useDispatch } from "react-redux";
import actions from "../../store/actions";

const useStyles = makeStyles((theme) => ({
  done: {
    textDecoration: "line-through",
  },
  form: {
    flexGrow: 1,
    marginRight: "30px",
  },
}));

function TodoItem({ todo }) {
  console.log(todo.isDone);
  const classes = useStyles();
  const dispatch = useDispatch();

  const [flag, setflag] = useState(false);
  const [text, setText] = useState(todo.text);

  const checkboxHandler = (event) => {
    console.log(event);
    console.log('checkboxHandler');
    event.preventDefault();
    dispatch(actions.todos.modifyTodo({ id: todo.id, isDone: !todo.isDone }));
  };

  const formHandler = (event) => {
    console.log('formHandler');
    event.preventDefault();
    setflag(false);
    dispatch(actions.todos.modifyTodo({ id: todo.id, text }));
  };

  return (
    <ListItem dense button={!flag} onClick={flag ? null : checkboxHandler}>
      <ListItemIcon>
        <Checkbox checked={todo.isDone} onClick={checkboxHandler} />
      </ListItemIcon>
      {flag && !todo.isDone ? (
        <form
          className={classes.form}
          noValidate
          autoComplete="off"
          onSubmit={formHandler}
        >
          <TextField
            multiline="true"
            defaultValue={todo.text}
            fullWidth
            autoFocus
            onChange={(e) => setText(e.target.value)}
            onBlur={formHandler}
            onKeyPress={e=>{console.log(e)}}
          />
        </form>
      ) : (
        <ListItemText
          multiline="true"
          primary={todo.text}
          className={todo.isDone ? classes.done : null}
        />
      )}

      <ListItemSecondaryAction>
        {todo.isDone ? (
          <IconButton
            onClick={() => {
              setflag((prev) => !prev);
            }}
            aria-label="delete"
          >
            <DeleteForeverIcon color="secondary" />
          </IconButton>
        ) : (
          <IconButton
            onClick={() => {
              setflag((prev) => !prev);
            }}
            aria-label="change"
          >
            <CreateIcon color="primary" />
          </IconButton>
        )}
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default TodoItem;
