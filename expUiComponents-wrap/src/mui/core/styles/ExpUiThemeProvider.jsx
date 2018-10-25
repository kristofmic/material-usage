import React from 'react';

import createMuiTheme from './createMuiTheme';
import MuiThemeProvider from './MuiThemeProvider';

import blue from '../colors/blue';

export const theme = createMuiTheme({
  palette: {
    primary: blue,
  },

  typography: {
    fontSize: 12,
    useNextVariants: true,
  },
});

function ExpUiThemeProvider(props) {
  return <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>;
}

export default ExpUiThemeProvider;
