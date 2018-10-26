import React from 'react';

import Fork from './Fork';
import Separate from './Separate';
import Wrap from './Wrap';

import withApp from '../connectors/withApp';

function App(props) {
  return (
    <>
      <Fork {...props} />
      <Separate {...props} />
      <Wrap {...props} />
    </>
  );
}

export { App };
export default withApp(App);
