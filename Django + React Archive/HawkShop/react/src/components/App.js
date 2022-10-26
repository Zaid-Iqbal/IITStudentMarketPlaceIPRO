import React, { Component } from "react";
import { render } from "react-dom";
import {BrowserRouter as Router,Switch,Route,Link,Redirect,} from 'react-router-dom';
//import search from "./search"
//import Navbar from "./navbar";

// add to urls the paths
export default class App extends Component
{
  constructor(props)
  {
    super(props);
  }

  render() {
    return <h1>Changed</h1>;
//    return(
//    <Router>
//      <div className="App m-2">
//        <Navbar></Navbar>
//        <div className="content">
//          <Switch>
//            <Route exact path="/itempages/:itemID" element={<ItemPageS></ItemPageS>} />
//            <Route path="/search" element={<Search></Search>} />
//            <Route path="/chat" element={<Chat></Chat>} />
//            <Route path="/account" element={<Account></Account>} />
//            <Route path="/settings" element={<Settings></Settings>} />
//            <Route path="" element={<Home></Home>} />
//          </Switch>
//        </div>
//      </div>
//    </Router>)
  }
}

render(<App />, document.getElementById("app"));