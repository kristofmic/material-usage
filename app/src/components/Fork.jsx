import React from 'react';

import Button from 'expUiComponents-fork/packages/material-ui/build/Button';
import Divider from 'expUiComponents-fork/packages/material-ui/build/Divider';
import Grid from 'expUiComponents-fork/packages/material-ui/build/Grid';
import Typography from 'expUiComponents-fork/packages/material-ui/build/Typography';
import {
  MuiThemeProvider,
  withStyles,
} from 'expUiComponents-fork/packages/material-ui/build/styles';

import theme from 'expUiComponents-separate/dist/styles/theme';

const styles = theme => ({
  grid: {
    padding: theme.spacing.unit * 3,
  },
  heading: {
    marginBottom: theme.spacing.unit,
  },
  button: {
    marginBottom: theme.spacing.unit,
  },
});

function Fork(props) {
  const { classes, loading, setWhoIAm, whoAmI } = props;

  return (
    <MuiThemeProvider theme={theme}>
      <Grid
        alignItems="center"
        className={classes.grid}
        container
        direction="column"
        justify="center">
        <Typography className={classes.heading} variant="h6">
          Fork
        </Typography>
        <Button
          className={classes.button}
          color="primary"
          loading={loading}
          onClick={setWhoIAm}
          variant="outlined">
          Who am I?
        </Button>
        <Typography variant="body1">I am {whoAmI}!</Typography>
      </Grid>
      <Divider />
    </MuiThemeProvider>
  );
}

export { Fork };
export default withStyles(styles)(Fork);
