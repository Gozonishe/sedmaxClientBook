import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';
import './ClientEditPage.css';
import ClientTree from '../ClientTree/ClientTree';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import EditableTable from '../example/exampleTable';

class ClientEditPage extends Component {
  render() {
    console.log(this.props.selectedRowData)
    return ( 
      <div className="ClientEdit" >
        <header>
          <h1 className='pageInfo'>Client Edit</h1>
        </header>
          <body className='mainContent'>
            <ClientTree/>

            {/* <div className='verticalLine'></div> */}
            {/* {this.renderEditTable()} */}

          </body>
            <EditableTable/>
            <Button className='cancelBtn' type="danger" block>
              <Link to={'/'}>Cancel</Link>
            </Button>
      </div>
    );
  }

  renderEditTable() {
    const columns = [{
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    }, {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
      editable: true,
    }, {
      title: 'Condition',
      dataIndex: 'Condition',
      key: 'Condition',
      render: v =><span>
                    <select id="menu1" onSelect="...">
                    <option value="true">1</option>
                    <option value="false">2</option>
                    </select>
                  </span>
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
          <Link to={"/edit_clients"} onClick={this.onRowClickHandler}> Save </Link>
        </span>
      ),
    }];

    const pagination = { position: 'none' }

    return(
      <Table 
        columns={columns}
        dataSource={[this.props.selectedRowData]}
        pagination={pagination}
        // onRow={record => ({onClick: () => this.onRowClickHandler(record)})}
      />
    )
  }
}

export default connect((state) => {
  return {
      selectedRowData: state.table.selectedRowData,
  }
}) (ClientEditPage);