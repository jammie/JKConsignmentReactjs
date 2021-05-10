

import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListConsignmentComponent from './components/ListConsignmentComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent'; 
import ViewConsignmentComponent from './components/ViewConsignmentComponent';
import CreateConsignmentComponent from './components/CreateConsignmentComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route exact path = "/" component = {ListConsignmentComponent}></Route>
                          <Route path = "/consignments" component = {ListConsignmentComponent}></Route>
                          <Route path = "/add-consignment/:id" component = {CreateConsignmentComponent} ></Route>
                          <Route path = "/view-consignment/:id" component = {ViewConsignmentComponent}></Route>
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
    
  );
}

export default App;

