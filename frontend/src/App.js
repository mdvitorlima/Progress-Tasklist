import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";

import { SportsStoreDataStore } from "../src/data/DataStore";
import Main from './views/Main';


function App(){

  return(<Provider store={SportsStoreDataStore}>
    <Router>
      <Switch>
      <Route path="/tasks" component={Main} />
        <Redirect to="/tasks" />
      </Switch>
    </Router>
  </Provider>);

}

export default App;