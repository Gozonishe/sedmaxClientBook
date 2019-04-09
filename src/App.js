import React, { Component } from 'react';
import './App.css';
import { Button } from 'antd';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <Button type="primary" shape="round" icon="download" size='large'>Download</Button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
