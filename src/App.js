import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './App.css';
import ClientEditPage from './components/ClientEditPage/ClientEditPage'
import ClientListPage from './components/ClientListPage/ClientListPage'
import jsonData from './clientsData.json'
import { setTableDataFromStorage } from './AC/table'


class App extends Component {
  componentDidMount() {
    this.props.setTableDataFromStorage(jsonData)
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path='/' component={ClientListPage}/>
            <Route path='/edit_clients' component={ClientEditPage} />
          </div>
        </Router>
      </div>
    )
  }
}

export default connect(null, {setTableDataFromStorage}) (App)