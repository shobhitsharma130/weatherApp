import React  from 'react';
import {Route, IndexRoute} from 'react-router';
import HomePage from './components/homePage';
import App from './components/App';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
  </Route>
);
