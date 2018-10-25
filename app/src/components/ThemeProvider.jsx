import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from 'expUiComponents-distinct/dist/styles/theme';

function ThemeProvider(props) {
  return (
    <CssBaseline>
      <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
    </CssBaseline>
  );
}

export default ThemeProvider;
