import React from 'react';
import { connect } from 'react-redux';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import {setSelectedRowData} from '../../AC/table'
import './ClientListPage.css';
import {Link} from 'react-router-dom'

class ClientListPage extends React.Component {
  onRowClickHandler = (record) => {
    console.log('selected_row: ', record)
    this.props.setSelectedRowData(record)
  }

  render() {
    const columns = [{
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
      render: text => <Link to={'/edit_clients'}>{text}</Link>,
    }, {
      title: 'Condition',
      dataIndex: 'Condition',
      key: 'Condition',
      render: v => <p>{v.toString()}</p>
    }, {
      title: 'Email',
      dataIndex: 'Email',
      key: 'Email',
    }, {
      title: 'Addresses',
      dataIndex: 'Addresses',
      key: 'Addresses',
    }, {
      title: 'Action',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="/edit_clients"> Edit </a>
        </span>
      ),
    }];

  const pagination = { position: 'none' }
    return ( 
      <div className="ClientEdit" >
        <header>
          <h1 className='pageInfo'>Sedmax Client Book</h1>
        </header>
          <body className='mainContent'>
            <div id='clientList'>
                <Table 
                  columns={columns}
                  dataSource={this.props.tableData}
                  pagination={pagination}
                  onRow={record => ({onClick: () => this.onRowClickHandler(record)})}
                />
            </div>
          </body>  
      </div>
    );
  }
}
export default connect(null, {setSelectedRowData}) (ClientListPage)