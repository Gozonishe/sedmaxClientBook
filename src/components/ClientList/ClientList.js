import React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import ClientData from '../../clientsData.json';
import jsonData from '../../clientsData.json';
import {setSelectedRowData} from '../../AC/table'

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
            render: text => <a href="/edit_clients" onClick={this.onRowClickHandler}>{text}</a>,
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
                <a href="/edit_clients" onClick={this.onRowClickHandler}> Edit </a>
              </span>
            ),
          }];

        const pagination = { position: 'none' }

        return(
            <div id='clientList'>
                <Table 
                  columns={columns}
                  dataSource={jsonData}
                  pagination={pagination}
                  // onRow={record => ({onClick: () => this.onRowClickHandler(record)})}
                />
            </div>
        )
    }
}

export default connect(null, {setSelectedRowData}) (ClientListPage)