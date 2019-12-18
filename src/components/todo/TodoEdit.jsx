import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, Button, TextField, Paper } from "@material-ui/core";
import { ArrowBackIos, DoneAllOutlined } from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import {
  fetchTodos,
  editTodo,
  completeTodo,
  removeTodo
} from "../store/actions/todos";
import Loader from "../Loader";

const initialState = {
  title: "",
  description: "",
  error: "",
  mounted: false
};

const styles = theme => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh !important"
  },
  edit: {
    width: "100%",
    maxWidth: 500,
    padding: theme.spacing(3)
  },
  topButtons: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(5)
  },
  titleEdit: {
    width: "100%",
    marginRight: theme.spacing()
  },
  descInput: {
    width: "100%",
    marginBottom: theme.spacing(5)
  },

  detailsButtonText: {
    fontSize: "0.9vh"
  }
});

export class TodoListDetails extends Component {
  constructor() {
    super();
    this.state = {
      ...initialState
    };
  }

  backbuttonHandler = () => {
    this.props.history.push("/");
  };

  changesHandler = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.props.todo[name] = value;
  };

  completedButtonHandler = () => {
    this.props.completeTodo(this.props.todo.id);
    this.props.history.push("/");
  };

  cancelbuttonHandler = () => {
    const { todo, initialTodo } = this.props;
    this.setState({ ...this.props.initialTodo });
    todo.title = initialTodo.title;
    todo.description = initialTodo.description;
  };

  saveButtonHandler = () => {
    const { title, description, completed, id } = this.props.todo;
    let updates = {
      title,
      description,
      completed
    };

    if (updates.title === "" || updates.title.length < 1) {
      return this.setState({ error: "Title cannot be empty!" });
    }
    this.props.editTodo(id, updates);
    this.props.history.push("/");
  };

  removeButtonHandler = () => {
    this.props.removeTodo(this.props.todo.id);
    this.props.history.push("/");
  };

  render() {
    const { todo, classes, mounted } = this.props;
    return (
      <div className={classes.container}>
        {mounted ? (
          <Paper>
            <Grid container className={classes.edit}>
              <Grid item xs={12} className={classes.topButtons}>
                <Button
                  variant="extendedFab"
                  color="primary"
                  size="medium"
                  onClick={this.backbuttonHandler}
                >
                  <ArrowBackIos />
                  Back
                </Button>
                <Button
                  variant="extendedFab"
                  color="default"
                  size="medium"
                  disabled={todo.completed}
                  onClick={() => this.completedButtonHandler(todo.id)}
                >
                  <DoneAllOutlined />
                  Done
                </Button>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Title"
                  name="title"
                  value={todo.title}
                  onChange={this.changesHandler}
                  className={classes.titleEdit}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Description"
                  multiline
                  name="description"
                  value={todo.description}
                  onChange={this.changesHandler}
                  className={classes.descInput}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={6}>
                  <Grid item xs={4}>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={this.saveButtonHandler}
                    >
                      Save
                    </Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      variant="outlined"
                      color="default"
                      onClick={this.cancelbuttonHandler}
                    >
                      Undo
                    </Button>
                  </Grid>
                  <Grid item xs={4}>
                    <Button
                      variant="outlined"
                      color="secondary"
                      onClick={this.removeButtonHandler}
                    >
                      Remove
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}

TodoListDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state, props) => {
  if (state.todos.mounted) {
    const currentTodo = state.todos.todos.find(
      todo => todo.id === parseInt(props.match.params.id, 10)
    );
    const { title, description, completed } = currentTodo;
    const initialTodo = {
      title: title,
      description: description,
      completed: completed
    };
    return {
      todo: currentTodo,
      initialTodo: initialTodo,
      mounted: state.todos.mounted
    };
  }

  return {
    todo: {},
    initialTodo: {},
    mounted: state.todos.mounted
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchTodos()),
  editTodo: (id, updates) => dispatch(editTodo(id, updates)),
  completeTodo: id => dispatch(completeTodo(id)),
  removeTodo: id => dispatch(removeTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TodoListDetails));
