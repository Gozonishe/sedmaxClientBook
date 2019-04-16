import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ClientEditPage from './components/ClientEditPage/ClientEditPage';
import ClientListPage from './components/ClientListPage/ClientListPage';
import jsonData from './clientsData.json'


class App extends Component {
  componentDidMount() {
    // тут дергаешь экшен который ложит данные из json в стор
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={MyClientListPage}/>
            <Route path='/edit_clients' component={ClientEditPage}></Route>
          </div>
        </Router>
      </div>
    );
  }
}

const MyClientListPage = (props) => {
  return (
    <ClientListPage tableData={jsonData}/>
  );
}

export default App;
