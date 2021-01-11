import React from 'react';
import { any } from 'prop-types';
import { Provider } from 'react-redux';
import store from 'store';

import 'scss/index.scss';
import 'scss/fonts.scss';
import 'scss/scroll-bar.scss';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

App.propTypes = {
  Component: any,
  pageProps: any,
};
