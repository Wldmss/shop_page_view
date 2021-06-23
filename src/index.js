import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { AppContainer } from 'react-hot-loader';

const render = (Component) =>
  ReactDOM.render(
      <AppContainer>
          <Component />
      </AppContainer>,
      document.getElementById('root')
);

render(App);

// // Webpack Hot Module Replacement API 부분
if (module.hot) module.hot.accept(<App />, () => render(App));