import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { fetchTodos } from './components/store/actions/todos';
import TodoMain from './components/todo/TodoMain';
import TodoEdit from './components/todo/TodoEdit'



const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#eee',
    height: '100vh',

  },

  control: {
    padding: theme.spacing.unit * 2
  },
});

class App extends Component {
  render() {

    return (
      <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route exact path ='/' component={TodoMain}/>
          <Route path = '/edit/:id' component={TodoEdit}/>
          <Redirect path = '*' to='/'/>
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

App.propTypes = {
	classes: PropTypes.object.isRequired
}

const mapDispatchToProps = (dispatch) => ({
	fetchTodos: () => dispatch(fetchTodos())
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(App));
