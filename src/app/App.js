import React, { Component } from 'react';
import './App.css';

import Header from '../header/header';
import Content from '../content/content';

class App extends Component {

  state = {
    selectedRowsCount: 10
  }

  changeCount = e =>{
     this.setState({ selectedRowsCount: e.target.value });
  }

    render() {
      return (
        <div>
          <Header changeCount={this.changeCount}/>
          <Content count={this.state.selectedRowsCount} />
        </div>
      );
    }
  }

  export default App;
