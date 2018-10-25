import { createStore as createReduxStore } from 'redux';

const initialState = {
  loading: false,
  whoAmI: 'Groot',
};

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'IAM_INIT':
      return Object.assign({}, state, {
        loading: true,
      });
    case 'IAM':
      return Object.assign({}, state, {
        loading: false,
        whoAmI: payload,
      });
    default:
      return state;
  }
}

export function createStore() {
  return createReduxStore(reducer);
}
