import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import DefaultPage from './default_page';
import App from './app';

const Root = ({store}) => (
    <Provider store={store}>
      <HashRouter>
        <div>
          <AuthRoute path='/' component={DefaultPage} />
          <ProtectedRoute path='/' component={App} />
        </div>
      </HashRouter>
    </Provider>
);

export default Root;
