import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/Directory';
import './App.css';


class App extends Component{
  render(){
    return(
      <div className="App">
        <Navbar dark color="info">
          <div className="container">
            <NavbarBrand href="/">Matt Ammirati</NavbarBrand>            
          </div>
        </Navbar>
        <Directory />
      </div>
    )
  }
}

export default App;
