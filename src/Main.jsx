import React, { Component } from 'react';
import propTypes from 'prop-types';
import App from './components/demo/App';
import Context from './components/context/Context';
// import { } from 'antd';
import './Main.scss';
import LifeCycle from './components/lifeCycle/LifeCycle';
import Ref from './components/ref/Ref';
import Lazy from './components/lazy/Lazy.jsx';
import ToDoContainer from './components/toDoList/ToDoContainer';
import Router from './components/router/Router.jsx'
import TestState from './components/state/TestState';
// import NotLasy from './components/lazy/NotLasy';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // componentDidMount() { }
  // componentWillReceiveProps(nextProps) { }
  render() {
    return (
      <div className='Main' >
        <h1>Main</h1>
        <ToDoContainer></ToDoContainer>
        <Router></Router>
        <TestState></TestState>
        {/* <App></App> */}
        {/* <Context></Context> */}
        {/* <LifeCycle></LifeCycle> */}
        {/* <Ref></Ref> */}
        {/* <Lazy></Lazy> */}
        {/* <NotLasy></NotLasy> */}

      </div>
    );
  }
}
Main.propTypes = {};
Main.defaultProps = {};
export default Main;
