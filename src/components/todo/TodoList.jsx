import React from 'react';
import PropTypes from 'prop-types';
import { List } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TodoListItem from './TodoItem';
import { connect } from 'react-redux';

const styles = theme => ({
    listRoot: {
        width: '100%',
        maxWidth: 550,
        backgroundColor: theme.palette.background.paper,
    }
});

export const TodoList = ({ classes, todos }) => (
        <List className={classes.listRoot} >
            {todos.map(todo =>
                <TodoListItem key={todo.id} todo={todo} />)}
        </List>

);

TodoList.propTypes = {
    classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    todos: state.todos.todos
});

export default connect(mapStateToProps, null)(withStyles(styles)(TodoList));
