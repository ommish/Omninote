import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import DefaultPage from './default_page';
import App from './app';
import SessionForm from './session/session_form_container';


// TODO: refreshing from login/signup paths returns to /, ?

const Root = ({store}) => (
    <Provider store={store}>
      <HashRouter>
        <div style={{height: "100%"}} >
          <AuthRoute exact path='/login' component={SessionForm} />
          <AuthRoute exact path='/signup' component={SessionForm} />
          <AuthRoute exact path='/' component={DefaultPage} />
          <ProtectedRoute path='/' component={App} />
        </div>
      </HashRouter>
    </Provider>
);

export default Root;
