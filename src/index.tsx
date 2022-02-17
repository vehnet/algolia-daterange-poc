import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import AlgoliaContainer from './AlgoliaContainer';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AlgoliaContainer>
      <App />
    </AlgoliaContainer>
  </React.StrictMode>,
  document.getElementById('root')
);
