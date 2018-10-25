import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import ButtonWithLoading from 'expUiComponents-distinct/dist/components/Buttons/ButtonWithLoading';

import withApp from '../connectors/withApp';

const styles = theme => ({
  grid: {
    padding: theme.spacing.unit * 3,
  },
  button: {
    marginBottom: theme.spacing.unit,
  },
});

function App(props) {
  const { classes, loading, setWhoIAm, whoAmI } = props;
  console.log(classes.button);
  return (
    <Grid
      alignItems="center"
      className={classes.grid}
      container
      direction="column"
      justify="center">
      <ButtonWithLoading
        className={classes.button}
        color="primary"
        loading={loading}
        onClick={setWhoIAm}
        variant="outlined">
        Who am I?
      </ButtonWithLoading>
      <Typography variant="h4">I am {whoAmI}!</Typography>
    </Grid>
  );
}

export { App };
export default withStyles(styles)(withApp(App));
