import React from 'react';

import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';

import ButtonWithLoading from 'expUiComponents-separate/dist/components/Buttons/ButtonWithLoading';
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

function Separate(props) {
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
          Separate
        </Typography>
        <ButtonWithLoading
          className={classes.button}
          color="primary"
          loading={loading}
          onClick={setWhoIAm}
          variant="outlined">
          Who am I?
        </ButtonWithLoading>
        <Typography variant="body1">I am {whoAmI}!</Typography>
      </Grid>
      <Divider />
    </MuiThemeProvider>
  );
}

export { Separate };
export default withStyles(styles)(Separate);
