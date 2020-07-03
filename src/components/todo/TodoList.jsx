import React from "react";
import PropTypes from "prop-types";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
  IconButton,
} from "@material-ui/core";
import { Close, DoneAllOutlined } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { COMPLETE_TODO_START, REMOVE_TODO_START } from "../store";

const styles = (theme) => ({
  listRoot: {
    width: "100%",
    maxWidth: 500,
    backgroundColor: theme.palette.background.paper,
    overflowY: "auto",
  },
});

const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const item = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <ListItem
      style={{ opacity: todo.completed ? 0.4 : 1 }}
      variants={item}
      component={motion.div}
      key={todo.id}
      button
      onClick={() => {
        history.push(`/edit/${todo.id}`);
      }}
    >
      <ListItemText primary={`${todo.id} : ${todo.title}`} />
      <ListItemSecondaryAction>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          disabled={todo.completed}
          tabIndex={-1}
          onClick={() => dispatch({ type: COMPLETE_TODO_START, id: todo.id })}
        >
          <DoneAllOutlined />
          Completed
        </Button>
        <IconButton
          variant="outlined"
          color="secondary"
          onClick={() => dispatch({ type: REMOVE_TODO_START, id: todo.id })}
        >
          <Close />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export const TodoList = ({ classes, todos }) => (
  <List
    component={motion.div}
    initial="hidden"
    animate="visible"
    variants={list}
    className={classes.listRoot}
  >
    {todos.map((todo, index) => (
      <TodoItem key={todo.id} index={index} todo={todo} />
    ))}
  </List>
);

TodoList.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  todos: state.todos.todos,
});

export default connect(mapStateToProps, null)(withStyles(styles)(TodoList));
