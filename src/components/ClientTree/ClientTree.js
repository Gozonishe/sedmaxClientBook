import { Tree } from 'antd';
import React, { Component } from 'react';
import './ClientTree.css';

class ClientTree extends Component {
    render(){
        const { TreeNode } = Tree;
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
                <TreeNode title="parent 1" key="0-0">
                <TreeNode title="parent 1-0" key="0-0-0" >
                    <TreeNode title="leaf" key="0-0-0-0" />
                    <TreeNode title="leaf" key="0-0-0-1" />
                </TreeNode>
                <TreeNode title="parent 1-1" key="0-0-1">
                    <TreeNode title={<span style={{ color: '#1890ff' }}>sss</span>} key="0-0-1-0" />
                </TreeNode>
                </TreeNode>
            </Tree></div>
            )
        }
    }

export default ClientTree;