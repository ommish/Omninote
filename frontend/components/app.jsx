import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Route } from 'react-router-dom';
import DefaultPage from './default_page';

const App = (props) => (
  <div>
      <AuthRoute path='/' component={DefaultPage} />
  </div>
);

export default App;
