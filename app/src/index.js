import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import { createStore } from './store';

import App from './components/App';
import ThemeProvider from './components/ThemeProvider';

const store = createStore();

ReactDOM.render(
  <ReduxProvider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ReduxProvider>,
  document.getElementById('app')
);
