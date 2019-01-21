import React, { Component } from 'react';
import propTypes from 'prop-types';
// import { } from 'antd';
// import './NotLasy.scss';
import LasySon from './LasySon.jsx'

class NotLasy extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  // componentDidMount() { }
  // componentWillReceiveProps(nextProps) { }
  render() {
    return (
      <div>
        <h3>not lazy</h3>
        <LasySon></LasySon>
      </div>
    );
  }
}
NotLasy.propTypes = {};
NotLasy.defaultProps = {};
export default NotLasy;
