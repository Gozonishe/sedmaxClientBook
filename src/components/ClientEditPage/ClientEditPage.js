import React, { Component } from 'react';
import { Button } from 'antd';
import './ClientEditPage.css';
import ClientTree from '../ClientTree/ClientTree';
import ClientList from '../ClientList/ClientList';

class ClientEditPage extends Component {
  render() {
    return ( 
      <div className="ClientEdit" >
        <header>
          <h1 className='pageInfo'>Client Edit</h1>
        </header>
          <body className='mainContent'>
            <ClientTree/>
            <div className='verticalLine'></div>
            <ClientList/>
          </body>
            <Button className='cancelBtn' type="danger" block href='/'>Cancel</Button>
      </div>
    );
  }
}

export default ClientEditPage;