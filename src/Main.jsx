import React, { Component } from 'react';
import propTypes from 'prop-types';
import App from './components/demo/App';
import Context from './components/context/Context';
// import { } from 'antd';
import './Main.scss';

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
        {/* <App></App> */}
        <Context></Context>

      </div>
    );
  }
}
Main.propTypes = {};
Main.defaultProps = {};
export default Main;
