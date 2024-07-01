import React, { Component } from 'react';
import Router from './Router/Router';
import Header from './Component/Header';
import Footer from './Component/Footer';


class App extends Component {
  render() {
    return (
      <>
      <Header />  
        <Router/>
        <Footer/>
      </>
    );
  }
}

export default App;