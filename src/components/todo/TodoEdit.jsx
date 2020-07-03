import React, { Component } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { Grid, Button, Paper, withStyles } from "@material-ui/core";
import { ArrowBackIos, DoneAllOutlined } from "@material-ui/icons";
import { connect } from "react-redux";
import {
  fetchTodos,
  editTodo,
  completeTodo,
  removeTodo,
} from "../store/actions/todos";
import { TextInputWrapped } from "../../shared";
import { EditFormSchema } from "./utils/EditValidation";
import Loader from "../Loader";

const initialState = {
  mounted: false,
};

const styles = (theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh !important",
  },
  edit: {
    width: "100%",
    maxWidth: 500,
    padding: theme.spacing(3),
  },
  topButtons: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    marginBottom: theme.spacing(5),
  },
  titleEdit: {
    width: "100%",
    marginRight: theme.spacing(),
  },
  descInput: {
    width: "100%",
    marginBottom: theme.spacing(5),
  },

  detailsButtonText: {
    fontSize: "0.9vh",
  },
});

export class TodoListDetails extends Component {
  constructor() {
    super();
    this.state = {
      ...initialState,
    };
  }

  completedButtonHandler = (values) => {
    const { completeTodo, history } = this.props;
    completeTodo(values.id);
    history.push("/");
  };

  saveButtonHandler = (values) => {
    const { history, editTodo } = this.props;
    editTodo(values);
    history.push("/");
  };

  removeButtonHandler = () => {
    const { removeTodo, todo, history } = this.props;
    removeTodo(todo.id);
    history.push("/");
  };

  render() {
    const { saveButtonHandler } = this;
    const { todo, classes, mounted, history } = this.props;

    return (
      <div className={classes.container}>
        {mounted ? (
          <Formik
            initialValues={todo}
            validationSchema={EditFormSchema}
            onSubmit={(values) => {
              saveButtonHandler(values);
            }}
          >
            {({
              handleSubmit,
              handleReset,
              errors,
              values,
              handleChange,
              touched,
              isValid,
            }) => (
              <Paper>
                <Grid container className={classes.edit}>
                  <Grid item xs={12} className={classes.topButtons}>
                    <Button
                      variant="outlined"
                      color="primary"
                      size="medium"
                      onClick={() => history.push("/")}
                    >
                      <ArrowBackIos />
                      Back
                    </Button>
                    <Button
                      variant="outlined"
                      color="default"
                      size="medium"
                      disabled={values.completed}
                      onClick={() => this.completedButtonHandler(todo.id)}
                    >
                      <DoneAllOutlined />
                      Done
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <TextInputWrapped
                      className={classes.titleEdit}
                      onChange={handleChange}
                      label="Title"
                      name="title"
                      value={values.title}
                      helperText={touched.title ? errors.title : ""}
                      error={touched.title && Boolean(errors.title)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextInputWrapped
                      className={classes.descInput}
                      onChange={handleChange}
                      label="Description"
                      name="description"
                      multiline
                      value={values.description}
                      helperText={touched.description ? errors.description : ""}
                      error={touched.description && Boolean(errors.description)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container spacing={6}>
                      <Grid item xs={4}>
                        <Button
                          disabled={!isValid}
                          variant="outlined"
                          color="primary"
                          onClick={handleSubmit}
                        >
                          Save
                        </Button>
                      </Grid>
                      <Grid item xs={4}>
                        <Button
                          variant="outlined"
                          color="default"
                          onClick={handleReset}
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
            )}
          </Formik>
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}

TodoListDetails.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => {
  if (state.todos.mounted) {
    const currentTodo = state.todos.todos.find(
      (todo) => todo.id === parseInt(props.match.params.id, 10)
    );
    const { title, description, completed } = currentTodo;
    const initialTodo = {
      title: title,
      description: description,
      completed: completed,
    };
    return {
      todo: currentTodo,
      initialTodo: initialTodo,
      mounted: state.todos.mounted,
    };
  }

  return {
    todo: {},
    initialTodo: {},
    mounted: state.todos.mounted,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchTodos: () => dispatch(fetchTodos()),
  editTodo: (id, updates) => dispatch(editTodo(id, updates)),
  completeTodo: (id) => dispatch(completeTodo(id)),
  removeTodo: (id) => dispatch(removeTodo(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(TodoListDetails));
