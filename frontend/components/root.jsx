import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import DefaultPage from './default_page';
import App from './app_container';
import AuthPage from './session/auth_page';

const Root = ({store}) => (
    <Provider store={store}>
      <HashRouter>
        <div style={{height: "100%"}} >
            <Switch>
              <ProtectedRoute path="/searchbylocation/:flagIds" component={App} />
              <ProtectedRoute path='/flags/:flagId' component={App} />
              <ProtectedRoute path='/notebooks/:notebookId' component={App} />
              <ProtectedRoute path='/tags/:tagId' component={App} />
              <ProtectedRoute path='/notes/:noteId' component={App} />
              <ProtectedRoute path='/notes' component={App} />
              <AuthRoute path='/signup' component={AuthPage} />
              <AuthRoute path='/login' component={AuthPage} />
              <AuthRoute path='/' component={DefaultPage} />
            </Switch>
        </div>
      </HashRouter>
    </Provider>
);

export default Root;
