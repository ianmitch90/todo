import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { TodoMain } from "./components/todo/TodoMain";
import TodoEdit from "./components/todo/TodoEdit";
import "./App.css";

const App = () => {
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
};

export default App;
