import React, { Component } from 'react';
import './App.css';
import ClientData from './clients.json';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ClientEditPage from './ClientEditPage/ClientEditPage';
import ClientListPage from './ClientListPage/ClientListPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={ClientListPage}/>
            <Route path='/edit_clients' component={ClientEditPage}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
