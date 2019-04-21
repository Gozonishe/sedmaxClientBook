import { Tree } from 'antd';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ClientTree.css';
import {setSelectedRowData, removeSelectedRowData} from '../../AC/table'

class ClientTree extends Component {

    onClickCheck = () => {
            console.log(this.props.treeData)
        }
    
    handleCheck = (data) => {
        const lastTreeIdx = data.map(e=>e[e.length - 1])
        const checkedItems = this.props.treeData.filter(d=> lastTreeIdx.some(x=> x === d.id.toString()))
        // this.props.removeSelectedRowData()
        this.props.setSelectedRowData(checkedItems)
    }

    render(){
        if (!this.props.treeData) {
            return null
        }
        
        const { TreeNode } = Tree;

        const { Name, Condition, Email, Addresses, id } = this.props.selectedRowData
            return(
                <div className='tree'>                  
                    <Tree
                    checkable
                    defaultExpandedKeys={['0']}
                    // defaultSelectedKeys={['0-0-5']}
                    defaultCheckedKeys={[`0-${getSelectedItemId(this.props.selectedRowData)}`]}
                    onSelect={this.onSelect}
                    onCheck={this.handleCheck}
                    >
                        <TreeNode title="Clients" key="0">
                            {this.props.treeData.map((data) => 
                                <TreeNode
                                    title={`Client ID: ${data.id}`}
                                    key={`0-${data.id}`}
                                >
                                    {/* <TreeNode title={data.Name} key="Name" />
                                    <TreeNode title={data.Condition.toString()} key="Condition" />
                                    <TreeNode title={data.Email} key="Email" />
                                    <TreeNode title={data.Addresses} key="Addresses" /> */}
                                </TreeNode>
                            )}
                        </TreeNode>    
                    </Tree>
                    
                    <button onClick={this.onClickCheck}>Condition</button>

                    
                </div>
            )
        }
    }

function getSelectedItemId(selectedItem) {
    if (!selectedItem) {
        return '0'
    } else {
        return selectedItem.length ? selectedItem[0].id : '0'
    }
}

export default connect((state) => {
    return {
        treeData: state.storage.storageData,
        selectedRowData: state.table.selectedRowData,
    }
  }, {setSelectedRowData, removeSelectedRowData}) (ClientTree);