import  React, { Component } from  'react';
import { BrowserRouter as Router, Switch, Route, Link} from  'react-router-dom';
import { Layout } from 'antd';
import  './App.css';
import 'antd/dist/antd.css';

import MouseTrail from './Components/MouseTrail';
import  Landing  from  './Components/Landing';
import  About  from  './Components/About';
import  Approach  from  './Components/LeanApproach';
import  Principles  from  './Components/LeanPrinciples';
import  Events  from  './Components/Events';
import  Ama  from  './Components/AskMeAnything';
import  Support  from  './Components/Support';

const { Header, Footer, Sider, Content } = Layout;

class  App  extends  Component {

render() {
    return (
      <React.Fragment style={{backgroundColor:'black'}}>
      <Router>
        <Switch>
          <Route exact path="/"> <Landing /> </Route>
          <Route exact path="/about"> <About /> </Route>
          <Route exact path="/approach"> <Approach /> </Route>
          <Route exact path="/principles"> <Principles /> </Route>
          <Route exact path="/events"> <Events /> </Route>
          <Route exact path="/ama"> <Ama /> </Route>
          <Route exact path="/support"> <Support /> </Route>
        </Switch>
      </Router>
      </React.Fragment>
    );
  }
}


export default App;
