import './App.css';
import React, { Component } from 'react'
import { Navbar } from './component/Navbar';
import News from './component/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

export default class App extends Component{
  pageSize=6
  apiKey= process.env.REACT_APP_NEWS_API
  state={
    progress: 30,
  }

  setProgress=(prog)=>{
    this.setState({progress:prog})
  }
  render(){
    return(
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height={30}
        color='FF00F1'
        progress={this.state.progress}
      />
        <Switch>
          <Route  exact path='/'><News setProgress={this.setProgress} key='general' apiKey={this.apiKey} pageSize={this.pageSize} country='in' category='general'/></Route>
          <Route  exact path='/general'><News setProgress={this.setProgress} key='general' apiKey={this.apiKey} pageSize={this.pageSize} country='in' category='general'/></Route>
          <Route  exact path='/sports'><News setProgress={this.setProgress} key='sports' apiKey={this.apiKey} pageSize={this.pageSize} country='in' category='sports'/></Route>
          <Route  exact path='/business'><News setProgress={this.setProgress} key='business' apiKey={this.apiKey} pageSize={this.pageSize} country='in' category='business'/></Route>
          <Route  exact path='/entertainment'><News setProgress={this.setProgress} key='entertainment' apiKey={this.apiKey} pageSize={this.pageSize} country='in' category='entertainment'/></Route>      
          <Route  exact path='/health'><News setProgress={this.setProgress} key='health' apiKey={this.apiKey} pageSize={this.pageSize} country='in' category='health'/></Route>
          <Route  exact path='/technology'><News setProgress={this.setProgress} key='technology' apiKey={this.apiKey} pageSize={this.pageSize} country='in' category='technology'/></Route>
          <Route  exact path='/science'><News setProgress={this.setProgress} key='science' apiKey={this.apiKey} pageSize={this.pageSize} country='in' category='science'/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}