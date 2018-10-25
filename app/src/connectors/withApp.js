import { connect } from 'react-redux';

import { setWhoIAm } from '../actions';

const withRedux = connect(
  state => state,
  dispatch => ({
    setWhoIAm: (...args) => setWhoIAm(...args)(dispatch),
  })
);

export default withRedux;
