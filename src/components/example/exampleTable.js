import { Table, Input, Button, Popconfirm, Form, } from 'antd';
import React, { Component } from 'react';
import './exampleTable.css';
import { connect } from 'react-redux';
  
  const FormItem = Form.Item;
  const EditableContext = React.createContext();
  
  const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
      <tr {...props} />
    </EditableContext.Provider>
  );
  
  const EditableFormRow = Form.create()(EditableRow);
  
  class EditableCell extends React.Component {
    state = {
      editing: false,
    }
  
    toggleEdit = () => {
      const editing = !this.state.editing;
      this.setState({ editing }, () => {
        if (editing) {
          this.input.focus();
        }
      });
    }
  
    save = (e) => {
      const { record, handleSave } = this.props;
      this.form.validateFields((error, values) => {
        if (error && error[e.currentTarget.id]) {
          return;
        }
        this.toggleEdit();
        handleSave({ ...record, ...values });
      });
    }
  
    render() {
      const { editing } = this.state;
      const {
        editable,
        dataIndex,
        title,
        record,
        index,
        handleSave,
        ...restProps
      } = this.props;
      return (
        <td {...restProps}>
          {editable ? (
            <EditableContext.Consumer>
              {(form) => {
                this.form = form;
                return (
                  editing ? (
                    <FormItem style={{ margin: 0 }}>
                      {form.getFieldDecorator(dataIndex, {
                        rules: [{
                          required: true,
                          message: `${title} is required.`,
                        }],
                        initialValue: record[dataIndex],
                      })(
                        <Input
                          ref={node => (this.input = node)}
                          onPressEnter={this.save}
                          onBlur={this.save}
                        />
                      )}
                    </FormItem>
                  ) : (
                    <div
                      className="editable-cell-value-wrap"
                      style={{ paddingRight: 24 }}
                      onClick={this.toggleEdit}
                    >
                      {restProps.children}
                    </div>
                  )
                );
              }}
            </EditableContext.Consumer>
          ) : restProps.children}
        </td>
      );
    }
  }
  
  class EditableTable extends React.Component {
    constructor(props) {
      super(props);
      this.columns = [{
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
      }, {
        title: 'Name',
        dataIndex: 'Name',
        key: 'Name',
        editable: true,
        align: 'center'
      }, {
        title: 'Condition',
        dataIndex: 'Condition',
        key: 'Condition',
        align: 'center',
        render: v => <span><select id="menu1" onSelect="...">
                      <option value="true">true</option>
                      <option value="false">false</option>
                    </select></span>
      }, {
        title: 'Email',
        dataIndex: 'Email',
        key: 'Email',
        editable: true,
        align: 'center',
      }, {
        title: 'Addresses',
        dataIndex: 'Addresses',
        key: 'Addresses',
        editable: true,
        align: 'center',
      }, {
        title: 'Action',
        dataIndex: 'Action',
        align: 'center',
        render: (text, record) => (
          this.state.dataSource.length >= 1
            ? (
              <Popconfirm title="Save Changes?" onConfirm={() => this.handleDelete(record.key)}>
                <a href="javascript:;">Save</a>
              </Popconfirm>
            ) : null
        ),
      }];
  
      this.state = {
        dataSource: [{
          key: '0',
          Name: 'Edward King 0',
          age: '32',
          address: 'London, Park Lane no. 0',
        },],
        count: 2,
      };
    }
  
    handleDelete = (key) => {
      const dataSource = [...this.state.dataSource];
      this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
    }
  
    handleSave = (row) => {
      const newData = [...this.state.dataSource];
      const index = newData.findIndex(item => row.key === item.key);
      const item = newData[index];
      newData.splice(index, 1, {
        ...item,
        ...row,
      });
      this.setState({ dataSource: newData });
    }
  
    render() {
      const { dataSource } = this.state;
      const components = {
        body: {
          row: EditableFormRow,
          cell: EditableCell,
        },
      };
      const columns = this.columns.map((col) => {
        if (!col.editable) {
          return col;
        }
        return {
          ...col,
          onCell: record => ({
            record,
            editable: col.editable,
            dataIndex: col.dataIndex,
            title: col.title,
            handleSave: this.handleSave,
          }),
        };
      });

      const pagination = { position: 'none' }

      return (
        <div>
          <Table
            components={components}
            rowClassName={() => 'editable-row'}
            bordered
            dataSource={this.props.selectedRowData}
            columns={columns}
            pagination={pagination}
          />
        </div>

      );
    }
  }
  
  export default connect((state) => {
    return {
        selectedRowData: state.table.selectedRowData,
    }
  }) (EditableTable);
 
  