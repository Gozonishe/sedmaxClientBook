import { Tree } from 'antd'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import './ClientTree.css'
import { setSelectedRowData, removeSelectedRowData } from '../../AC/table'

class ClientTree extends Component {
  handleCheck = (data) => {
    const lastTreeIdx = data.map(e => e[e.length - 1])
    const checkedItems = this.props.treeData.filter(d => lastTreeIdx.some(x => x===d.id.toString()))
    this.props.setSelectedRowData(checkedItems)
  }

  render(){
    if (!this.props.treeData) {
      return null
    }
    const { TreeNode } = Tree;
      return(
        <div className='tree'>                  
          <Tree
          checkable
          defaultExpandedKeys={['0']}
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
                </TreeNode>
              )}           
            </TreeNode>    
          </Tree>
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
}, {setSelectedRowData, removeSelectedRowData}) (ClientTree)