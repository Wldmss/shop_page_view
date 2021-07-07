import React, { Component } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { hot } from 'react-hot-loader';
import MainComponent from './component/main/main';
import MyPageComponent from './component/body/bodyMain/mypageMain';
import StoreMainComponent from './component/body/bodyMain/storeMain';

class App extends Component {

  componentDidMount(){
    console.log("welcome to App.js");
  }

  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainComponent} />
          <Route exact path="/store" component={StoreMainComponent} />
          <Route exact path="/member" component={MyPageComponent} />
        </Switch>
      </Router>
    );
  }
}

export default hot(module)(App);
