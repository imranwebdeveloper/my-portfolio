import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './styled-components/GlobalStyle';
import { Provider } from 'react-redux';
import { store } from './stores/Stores';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
