import React from 'react';

import Button from 'expUiComponents-wrap/dist/mui/core/Button';
import Divider from 'expUiComponents-wrap/dist/mui/core/Divider';
import Grid from 'expUiComponents-wrap/dist/mui/core/Grid';
import Typography from 'expUiComponents-wrap/dist/mui/core/Typography';
import {
  ExpUiThemeProvider,
  withStyles,
} from 'expUiComponents-wrap/dist/mui/core/styles';

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

function Wrap(props) {
  const { classes, loading, setWhoIAm, whoAmI } = props;

  return (
    <ExpUiThemeProvider>
      <Grid
        alignItems="center"
        className={classes.grid}
        container
        direction="column"
        justify="center">
        <Typography className={classes.heading} variant="h6">
          Wrap
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
    </ExpUiThemeProvider>
  );
}

export { Wrap };
export default withStyles(styles)(Wrap);
