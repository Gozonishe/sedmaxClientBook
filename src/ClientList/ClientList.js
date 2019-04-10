import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table } from 'antd';
import ClientData from '../clients.json';

class ClientList extends Component {
    render() {
        const columns = [{
            title: 'ID',
            dataIndex: '_id',
            key: '_id',
          }, {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="/edit_clients">{text}</a>,
          }, {
            title: 'Condition',
            dataIndex: 'condition',
            key: 'condition',
          }, {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
          }, {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
          }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <span>
                <a href="/edit_clients"> Edit </a>
              </span>
            ),
          }];
          
          const data = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
          }, {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
            tags: ['loser'],
          }, {
            key: '3',
            name: 'Joe Black',
            age: 32,
            address: 'Sidney No. 1 Lake Park',
            tags: ['cool', 'teacher'],
          }];

        return(
            <div id='clientList'>
                <Table  columns={columns} dataSource={data} />
            </div>
        )
    }
}

export default ClientList;