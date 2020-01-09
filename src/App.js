import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './header';
import Content from './content';

class App extends Component {

  state = {
    data: null
  }

  componentDidMount() {
    this.getCurrencies();
  }

  changeCount = (e) => {
     this.getCurrencies(e.target.value, 1);
  }  

  getCurrencies = (perPage = 10, page = 1) => {
    fetch(`https://api.udilia.com/coins/v1/cryptocurrencies?perPage=${perPage}&page=${page}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ data })
      });
  }

    render() {
      return (
        <div>
          <Header changeCount={this.changeCount}/>
          <Content data={this.state.data} getCurrencies={this.getCurrencies} />
        </div>
      );
    }
  }

  export default App;
