import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd'

import './ClientEditPage.css'
import ClientTree from '../ClientTree/ClientTree'
import EditableTable from '../EditableTable/EditableTable'
import { removeSelectedRowData } from '../../AC/table'

class ClientEditPage extends Component {
  onCancelHandler = () => {
    this.props.removeSelectedRowData()
  }

  render() {
    return ( 
      <div className="ClientEdit" >
        <header>
          <h1 className='pageInfo'>Client Edit</h1>
        </header>
          <div className='mainContent'>
            <span>
              <ClientTree />
            </span>
            <span>
              <EditableTable/>
              <Button className='cancelBtn' type="danger" block onClick={this.onCancelHandler}>
                  <a href='/'>Discard changes</a>
              </Button>
            </span>
          </div>  
      </div>
    );
  }

}

export default connect((state) => {
  return {
      selectedRowData: state.table.selectedRowData,
  }
}, {removeSelectedRowData}) (ClientEditPage);