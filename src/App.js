import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './containers/homepage';
import SignIn from './containers/sign-in';
import SignUp from './containers/sign-up';
import NotFound from './containers/not-found';
import Header from './components/header';
import './App.css';
import ActivItem from './containers/activItem';
import Activ from './containers/activ';
import Progress from './containers/progress';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/activItem" component={ActivItem} />
        <Route path="/progress" component={Progress} />
        <Route path="/activ/:activId" component={Activ} />
        <Route path="/*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
