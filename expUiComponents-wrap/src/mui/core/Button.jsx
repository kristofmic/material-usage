import React from 'react';
import Transition from 'react-transition-group/Transition';
import cx from 'classnames';

import MuiButton from '@material-ui/core/Button';

import CircularProgress from './CircularProgress';
import { withStyles } from './styles';

const duration = 100;

const styles = () => ({
  progress: {
    position: 'absolute',
  },
  children: {
    opacity: 1,
    transition: `opacity ${duration}ms ease-in-out`,
  },
  'children-entering': {
    opacity: 1,
  },
  'children-entered': {
    opacity: 0,
  },
});

function Button(props) {
  const { classes, children, disabled, loading, ...other } = props;

  return (
    <MuiButton {...other} disabled={disabled || loading}>
      <Transition in={loading} timeout={duration}>
        {state => (
          <>
            {loading &&
              state === 'entered' && (
                <CircularProgress
                  className={cx(classes.progress)}
                  disabled={loading}
                  size={20}
                />
              )}
            <span
              className={cx(classes.children, classes[`children-${state}`])}>
              {children}
            </span>
          </>
        )}
      </Transition>
    </MuiButton>
  );
}

export default withStyles(styles)(Button);
