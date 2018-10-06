import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import {Provider} from "react-redux";
import config from "./components/store/store";
import Loadable from "react-loadable";
import loader from "./components/Loader";
import {fetchTodos} from "./components/store/actions/todos"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import {purple, pink} from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: pink,
  },
   overrides: {
    MuiButton: {
      root: {
        borderRadius: 4,
        border: 0,
        color: "linear-gradient(17deg, #4834d4 30%, #ff7979 90%)",
        boxShadow: "0 3px 5px 2px rgba(104, 109, 224, .4)",
      },
    },
  },
});
const store = config()

//'prefecthing' to ensure that the action for list is already working before list triggers itself to do the same, in many ways this could be optimized by racing these two actions in saga or in a reg async promise , but this app isn't large scale so it just improves overall error/app behavior i hope.

const prefetch =  () => {
    store.dispatch(fetchTodos())
    console.log('prefetch fired')
    };

prefetch()

//using loadable to import the entire app seperately from when index.js loads, allows prefetch() to ensure that it kicks off before the entire app starts.

const App = Loadable({
    loader: () => import("./App"),
    loading: loader
})

//have providers at this level 

ReactDOM.render(<Provider store={store}>
    <MuiThemeProvider theme={theme}>
        <App /> 
    </MuiThemeProvider>
</Provider>, document.getElementById("root"));
serviceWorker.register();
