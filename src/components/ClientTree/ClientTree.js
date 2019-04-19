import { Tree } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ClientTree.css';

class ClientTree extends Component {

    onClickCheck = () => {
            console.log([this.props.selectedRowData])
        }

    render(){
        const { TreeNode } = Tree;

        const { Name, Condition, Email, Addresses, id } = this.props.selectedRowData
        


            return(
                <div className='tree'>
                    <Tree
                    checkable
                    defaultExpandedKeys={['0-0-0', '0-0-1']}
                    defaultSelectedKeys={['0-0-0', '0-0-1']}
                    defaultCheckedKeys={['0-0-0', '0-0-1']}
                    onSelect={this.onSelect}
                    onCheck={this.onCheck}
                    >
                        <TreeNode title="Clients" key="0-0">
                            <TreeNode title={id} key="0-0-0" >
                                <TreeNode title='Name' key="Name">
                                    <TreeNode title="Name" key="Name" />
                                </TreeNode>
                                <TreeNode title="Condition" key="0-0-0-0">
                                    <TreeNode title="123" key="0-0-0-1" />
                                </TreeNode>
                                <TreeNode title="Email" key="0-0-0-0">
                                    <TreeNode title="123" key="0-0-0-1" />
                                </TreeNode>
                                <TreeNode title="Addresses" key="0-0-0-0">
                                    <TreeNode title="123" key="0-0-0-1" />
                                </TreeNode>
                            </TreeNode>
                        </TreeNode>
                    </Tree>
                    <button onClick={this.onClickCheck}>Name is:{Name}</button>
                </div>
            )
        }
    }



export default connect((state) => {
    return {
        selectedRowData: state.table.selectedRowData,
    }
  }) (ClientTree);