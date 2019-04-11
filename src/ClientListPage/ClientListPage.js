import React, { Component } from 'react';
import ClientList from '../ClientList/ClientList';
import './ClientListPage.css';

class ClientListPage extends Component {
  render() {
    return ( 
      <div className="ClientEdit" >
        <header>
          <h1 className='pageInfo'>Sedmax Client Book</h1>
        </header>
          <body className='mainContent'>
            <ClientList/>
          </body>  
      </div>
    );
  }
}

export default ClientListPage;