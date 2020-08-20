import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Link,Switch,BrowserRouter as Router} from "react-router-dom"
import './index.css';
import App from './App';
import User from './user'

const routing = (
  <Router>
  <div>
  <ul>
  <li><Link to = "/">Home</Link></li>
  <li><Link to = "/user">User</Link></li>
 
  
  </ul>
  </div>
  <Switch>
  <Route exact path = "/" component = {App}/>
  <Route path = "/user" component = {User}/>
  
    
  </Switch>
  </Router>
)
ReactDOM.render(routing, document.getElementById('root')
);

