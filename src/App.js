import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import '../App.css';
import { hot } from 'react-hot-loader';
import DashHeader from './dashboard/dashHeader/dashHeader';
import InputInfo from './InputInfo/inputInfo';

class App extends Component {

  componentDidMount(){
    console.log("welcome to App.js");
  }

  render(){
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/devops/:empCd" component={MeasureForm} /> */}
        </Switch>
      </Router>
    );
  }
}

export default hot(module)(App);
