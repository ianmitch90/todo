import React, { Component } from "react";
import PropTypes from "prop-types";
import { Grid, Button, Paper, TextField, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { addTodo } from "../store/actions/todos";

const styles = theme => ({

    formContainer: {
        flexGrow: 1,
        color: "white",
        width: "100%",
        maxWidth: 500,
    },

    paper: {
        background: "linear-gradient(45deg, #FFDEE9 0%, #dfe6e9 25%, #74b9ff 25%, #B5FFFC 100%)",
        backgroundBlendMode: "overlay",
        padding: theme.spacing.unit * 2
    }
});

export class TodoListAddNew extends Component {

    state = {
        title: '',
        description: '',
        completed: false
    }

    formHandler = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    submitHandler = () => {
        if (this.state.title === '' || this.state.title.length < 3) {
        } else {
            this.props.addTodo(this.state);
            this.setState({ title: '' });
        }
    }

    render() {
        return (
            <Grid container >
                <Grid item md={12} className={this.props.classes.formContainer}>
                    <Paper className={this.props.classes.paper}>
                        <Grid container>
                            <Grid item md={12}>
                                <Typography variant="display1">
                                    TASK TRACKER
								</Typography>
                            </Grid>
                            <Grid item md={12}>
                                <TextField
                                    name="title"
                                    value={this.state.title}
                                    margin="normal"
                                    onChange={this.formHandler}
                                />
                            </Grid>
                            <Grid item md={12}>
                                <Button
                                    color="primary"
                                    variant="outlined"
                                    onClick={this.submitHandler}
                                >Add Task</Button>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

TodoListAddNew.propTypes = {
    classes: PropTypes.object.isRequired
}


const mapDispatchToProps = (dispatch) => ({
    addTodo: (todo) => dispatch(addTodo(todo))
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(TodoListAddNew));