import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Index from './pages/Form10';
import User from './pages/Usuario';

export default function Routes (){
  return(
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Index} />
        <Route path='/usuário' component={User} />
      </Switch>
    </BrowserRouter>
  );
}