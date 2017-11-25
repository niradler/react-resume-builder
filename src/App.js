import React, {Component} from 'react';
import Create from './Create';
import Simple from './Simple';
import logo from './logo.svg';
import {Switch, Route} from 'react-router-dom'
import './App.css';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      cv: {
        "fname": "Nir Adler",
        "jobTitle": "Web Developer",
        "phone": "0525310600",
        "email": "niradler55@gmail.com",
        "site": "https://PrototypesArt.net",
        "profile": "A self taught, full-stack JavaScript developer with a passion for creating awsom" +
            "eness.   I’m an absolute geek and love building and design systems and products.",
        "workEx": [
 {
            "jobTitle": "Web Developer",
            "from": "2016-07-19",
            "to": "2017-11-25",
            "description": "developing ecommerce website using the latest technologies"
          }
        ],
        "keySkill": [
 {
            "skill": "Software Development"
          }, {
            "skill": "IOT"
          }, {
            "skill": "Hacking"
          }, {
            "skill": "Mobile Development"
          }
        ],
        "edu": [ {
            "institute": "Google",
            "from": "2010-07-19",
            "to": "2017-11-25",
            "description": "self taught"
          }
        ]
      }
    }

  }
componentWillMount(){
  localStorage.setItem('cv',JSON.stringify(this.state.cv)); 
}
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/Create' component={Create}/>
          <Route
          exact
            path='/simple'
            component={(p) =>< Simple {...p} cv = {
            this.state.cv
          } />}/>
          <Route
          path='/simple/:action'
          component={(p) =>< Simple {...p} cv = {
          this.state.cv
        } />}/>
          <Route path='/' component={(p)=><Create {...p} dcv={this.state.cv}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
