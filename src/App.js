import React, { Component } from 'react';
import './App.css';
import ClientList from './ClientList/ClientList';
import ClientData from './clients.json';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ClientEdit from './ClientEdit/ClientEdit';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={ClientList}/>
            <Route path='/edit_clients' component={ClientEdit}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
