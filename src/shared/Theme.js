import React from "react";
import {
  CssBaseline,
  MuiThemeProvider,
  createMuiTheme
} from "@material-ui/core";

import { purple, pink } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: pink
  },
  typography: {
    useNextVariants: true
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 4,
        border: 0,
        color: "linear-gradient(17deg, #4834d4 30%, #ff7979 90%)",
        boxShadow: "0 3px 5px 2px rgba(104, 109, 224, .4)"
      }
    }
  }
});

const Theme = props => {
  return (
    <div>
      <CssBaseline>
        <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
      </CssBaseline>
    </div>
  );
};

export default Theme;
