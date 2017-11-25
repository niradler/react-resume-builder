import React, {Component} from 'react';
import Create from './Create';
import Simple from './Simple';
import logo from './logo.svg';
import { Switch,Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor(props){
    super()
    this.state={
      cv:{
        fname:"Nir Adler",
        email:"niradler55@gmail.com",
        site:"prototypesart.net",
        phone:"0525310600",
        jobTitle:"developer",
        profile:"nir the developer",
        workEx:[{jobTitle:"developer",from:"19 7 88", to:"21 7 89",description:"Description"}],
        keySkill:[{description:"Description"}],
        edu:[{institute:"developer",from:"19 7 88", to:"21 7 89",description:"Description"}],
      }
    }
    this.make=this.make.bind(this);
  }
  make(cv){
    this.setState({cv})
  }
  render() {
    return (
      <div className="App">
     
        <header className="App-header">
        
        <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
          <h1 className="App-title">Welcome to React resume builder</h1>
            <a className="navbar-brand" href="#">
            <img src={logo} className="App-logo" alt="logo"/>
            </a>
          </div>
        </div>
      </nav>

      
          
        </header>
        <Switch>
        <Route path='/Create' component={Create}/>
        <Route path='/Simple' component={()=><Simple cv={this.state.cv}/>}/>
      </Switch>  
      </div>
    );
  }
}

export default App;
