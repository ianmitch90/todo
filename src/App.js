import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { fetchTodos } from "./components/store/actions/todos";
import { withStyles } from "@material-ui/core/styles";
import TodoMain from "./components/todo/TodoMain";
import TodoEdit from "./components/todo/TodoEdit";
import "./App.css";

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "#eee",
    height: "100vh"
  },
  control: {
    padding: theme.spacing(2)
  }
});

class App extends Component {
  componentDidMount() {
    const { fetchTodos } = this.props;
    fetchTodos();
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={TodoMain} />
            <Route path="/edit/:id" component={TodoEdit} />
            <Redirect path="*" to="/" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
  todos: PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchTodos())
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(App));
