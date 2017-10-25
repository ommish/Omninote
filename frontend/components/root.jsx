import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import DefaultPage from './default_page';
import App from './app';
import SessionForm from './session/session_form_container';

const Root = ({store}) => (
    <Provider store={store}>
      <HashRouter>
        <div style={{height: "100%"}} >
          <Switch>
            <AuthRoute path='/login' component={SessionForm} />
            <AuthRoute path='/signup' component={SessionForm} />
            <AuthRoute path='/' component={DefaultPage} />
          </Switch>
          <ProtectedRoute path='/' component={App} />
        </div>
      </HashRouter>
    </Provider>
);

export default Root;
