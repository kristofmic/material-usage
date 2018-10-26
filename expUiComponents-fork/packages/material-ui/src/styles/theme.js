import createMuiTheme from './createMuiTheme';
import blue from '../colors/blue';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },

  typography: {
    fontSize: 12,
    useNextVariants: true,
  },
});

export default theme;
