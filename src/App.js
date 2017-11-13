import React, {Component} from 'react';
import Create from './Create';
import logo from './logo.svg';
import {Button, Checkbox, Form, Container, Menu} from 'semantic-ui-react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <Menu>
            <img src={logo} className="App-logo" alt="logo"/>
            <h1 className="App-title">Welcome to React resume builder</h1>
          </Menu>

        </header>
      {/*  <Create/>*/}
      </div>
    );
  }
}

export default App;
