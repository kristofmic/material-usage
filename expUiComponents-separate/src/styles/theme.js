import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

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
