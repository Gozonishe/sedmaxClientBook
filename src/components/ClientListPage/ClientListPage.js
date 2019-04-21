import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import 'antd/dist/antd.css';
import './ClientListPage.css';
import { Table } from 'antd';

import { setSelectedRowData } from '../../AC/table'


class ClientListPage extends React.Component {
  onRowClickHandler = (record) => {
    console.log('selected_row: ', record)
    this.props.setSelectedRowData(record)
  }

  render() {
    if (!this.props.tableData) {
      return null
    }

    const columns = [{
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      align: 'center',
    }, {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
      align: 'center',
      render: text => <Link to={'/edit_clients'}>{text}</Link>,
    }, {
      title: 'Condition',
      dataIndex: 'Condition',
      key: 'Condition',
      align: 'center',
      render: v => <span>{v.toString()}</span>
    }, {
      title: 'Email',
      dataIndex: 'Email',
      key: 'Email',
      align: 'center',
    }, {
      title: 'Addresses',
      dataIndex: 'Addresses',
      key: 'Addresses',
      align: 'center',
    }, {
      title: 'Action',
      key: 'action',
      align: 'center',
      render: text => <Link to={'/edit_clients'}>Edit</Link>,
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
export default connect((state) => {
  return {
    tableData: state.storage.storageData,
  }
}, {setSelectedRowData}) (ClientListPage)