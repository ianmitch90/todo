import React, { useEffect } from "react";
import List from "./TodoList";
import Form from "./TodoListForm";
import { useDispatch } from "react-redux";
import { FETCHING_TODOS } from "../store";

const styles = {
  height: "100vh",
  padding: "1em",
  display: "grid",
  gridTemplateColumns: `1fr 1fr 1fr 1fr`,
  gridTemplateRows: `1fr 1fr 1fr .5fr`,
  gridTemplateAreas: `
  "input input list list"
  "input input list list" 
  "pre pre list list" 
  "nav nav list list"`,
  input: {
    gridArea: "input",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    gridArea: "list",
    overflowY: "auto",
    display: "flex",
    justifyContent: "center",
  },
  pre: {
    gridArea: "pre",
  },
};

export const TodoMain = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: FETCHING_TODOS });
  }, [dispatch]);

  return (
    <div style={styles}>
      <div className="input" style={styles.input}>
        <Form />
      </div>
      <div className="list" style={styles.list}>
        <List />
      </div>
    </div>
  );
};
