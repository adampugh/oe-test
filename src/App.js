import React, { Component } from 'react';
// import './App.css';
import Navbar from "./components/navbar";
import Product from "./components/product";
import Footer from "./components/footer";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Product />
        <Footer />
      </div>
    );
  }
}

export default App;
