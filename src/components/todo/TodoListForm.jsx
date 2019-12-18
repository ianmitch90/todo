import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Paper,
  TextField,
  Typography,
  IconButton
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import useForm from "react-hook-form";
import { RHFInput } from "react-hook-form-input";
import { Replay } from "@material-ui/icons";
import { addTodo } from "../store/actions/todos";
import { useDispatch } from "react-redux";

const initalState = {
  title: ""
};

const styles = theme => ({
  paper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background:
      "linear-gradient(120deg, #FFDEE9 0%, #dfe6e9 25%, #74b9ff 25%, #B5FFFC 100%)",
    backgroundBlendMode: "overlay",
    padding: theme.spacing(2),
    width: 500
  },
  newTaskAction: {
    display: "flex",
    justifyContent: "space-between"
  }
});

const TodoListAddNew = props => {
  const dispatch = useDispatch();
  const { handleSubmit, register, setValue, reset } = useForm({
    mode: "onChange"
  });
  // so you can destructure any methods related to the current from you are useing that you want to use, usually you will need register and handleSubmit to hook into the lib's context. please note: setValue behaves like react.memo() it tries not to unessesarilly rerender

  return (
    <Paper className={props.classes.paper}>
      <Typography variant="h5">TASK TRACKER</Typography>

      <form
        onSubmit={handleSubmit(data => {
          console.log("submitted:", data);
          dispatch(addTodo(data));
          reset(initalState);
        })}
      >
        {/* RHFInput is the wrapper companion lib that automatically wraps ui components */}
        <RHFInput
          as={<TextField />}
          name="title"
          register={register}
          setValue={setValue}
          margin="normal"
          variant="outlined"
          label="Enter Task Title"
        />

        <div className={props.classes.newTaskAction}>
          <Button color="primary" variant="outlined" type="submit">
            Add Task
          </Button>
          <IconButton
            variant="outlined"
            onClick={() => {
              reset(initalState);
            }}
          >
            <Replay fontSize="small" />
          </IconButton>
        </div>
      </form>
    </Paper>
  );
};

TodoListAddNew.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TodoListAddNew);
