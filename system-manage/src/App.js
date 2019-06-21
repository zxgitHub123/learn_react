import React from 'react';
import {Route,Switch} from "react-router-dom";
import './App.css';
import Menu from "./components/menu.js";
import Main from "./components/main.js";
import Layout from './components/layout';
class App extends React.Component{
  render(){
    return <Switch>
        {/* <Route path="/warn" component={Warn}/> */}
        <Route path="/" render={(props)=>{
            return <Layout type="2" left={<Menu {...props}/>} right={<Main {...props}/>}/>
        }}/>
      </Switch>
  }
}

export default App;
