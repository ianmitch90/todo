import React from "react";
import List from "./TodoList";
import Form from "./TodoListForm";

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
    alignItems: "center"
  },
  list: {
    gridArea: "list",
    overflowY: "auto",
    display: "flex",
    justifyContent: "center"
  },
  pre: {
    gridArea: "pre"
  }
};
export default class TodoMain extends React.PureComponent {
  render() {
    return (
      <div style={styles}>
        <div className="input" style={styles.input}>
          <Form />
        </div>
        <div className="list" style={styles.list}>
          <List />
        </div>
        <div className="pre" style={styles.pre}>
          ---pre---
        </div>
        <div className="nav">nav</div>
      </div>
    );
  }
}
