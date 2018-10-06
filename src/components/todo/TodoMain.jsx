import React from "react"
import List from "./TodoList";
import Form from "./TodoListForm";

//containing my layout 
const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "start",
  margin: "5em"
}
export default class TodoMain extends React.PureComponent {
  render() {
    return (
      <div style={styles}>
        <Form/>
        <List/>
      </div>
    )
  }
}
