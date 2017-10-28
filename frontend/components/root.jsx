import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import DefaultPage from './default_page';
import App from './app_container';
import SessionForm from './session/session_form_container';
import { receiveUserErrors } from '../actions/session_actions';

const Root = ({store}) => (
    <Provider store={store}>
      <HashRouter>
        <div style={{height: "100%"}} >
            <AuthRoute exact path='/login' component={SessionForm} />
            <AuthRoute exact path='/signup' component={SessionForm} />
            <AuthRoute exact path='/' component={DefaultPage} />
            <Switch>
              <ProtectedRoute path='/notes' component={App} />
              <ProtectedRoute path='/notes/:noteId' component={App} />
              <ProtectedRoute path='/notebooks' component={App} />
              <ProtectedRoute path='/notebooks/:notebookId' component={App} />
            </Switch>
        </div>
      </HashRouter>
    </Provider>
);

export default Root;
