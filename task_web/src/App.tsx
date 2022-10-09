import React from 'react';

import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {ThemeLayout} from './layouts';
import {AppRouter} from '@/routes';

import {store} from './store';
import {createGlobalStyle} from 'styled-components';

import 'slick-carousel/slick/slick.css';

//TODO: FONTS
export const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    outline: none;

    font-family: Mulish, sans-serif;
    font-weight: 400;
  }

  button, a {
    cursor: pointer;
  }

  li {
    list-style: none;
  }


`;

const App = () => (
  <Provider store={store}>
    <Router>
      <ThemeLayout>
        <GlobalStyles />
        <AppRouter />
      </ThemeLayout>
    </Router>
  </Provider>
);
export default App;
