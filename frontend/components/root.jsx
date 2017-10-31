import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import DefaultPage from './default_page';
import App from './app_container';
import AuthPage from './session/auth_page';
import { receiveUserErrors } from '../actions/session_actions';

const Root = ({store}) => (
    <Provider store={store}>
      <HashRouter>
        <div style={{height: "100%"}} >
          <Switch>
            <AuthRoute exact path='/signup' component={AuthPage} />
            <AuthRoute exact path='/login' component={AuthPage} />
            <AuthRoute path='/' component={DefaultPage} />
          </Switch>
            <Switch>
              <ProtectedRoute path='/notebooks/:notebookId/notes/:noteId' component={App} />
              <ProtectedRoute path='/notebooks/:notebookId' component={App} />
              <ProtectedRoute path='/tags/:tagId/notes/:noteId' component={App} />
              <ProtectedRoute path='/tags/:tagId' component={App} />
              <ProtectedRoute path='/notes/:noteId' component={App} />
              <ProtectedRoute path='/notebooks' component={App} />
              <ProtectedRoute path='/notes' component={App} />
            </Switch>
        </div>
      </HashRouter>
    </Provider>
);

export default Root;
