import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { languageContext, languages } from './config/language';

// component
import App from './view/App';

const currentLanguage = 'es';
const language = languages[currentLanguage];

ReactDOM.render(
  <BrowserRouter>
    <languageContext.Provider value={{ languageContext: language }}>
      <App />
    </languageContext.Provider>
  </BrowserRouter>,
  document.getElementById('root')
);