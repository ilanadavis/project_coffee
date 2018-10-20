import React from 'react';  //importing the entire react library
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import ActionSelection from './ActionSelection';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ActionSelection}/>
      <Route exact path="/action/:actionSelected" component={App}/>
      <Route component={NotFound} />


    </Switch>
  </BrowserRouter>
)


export default Router;