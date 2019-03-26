import React, { Component } from 'react';
import propTypes from 'prop-types';
import controllize from './controllize'
// import { } from 'antd';
// import './HocTester.scss';

class HocTester extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() { }
  componentWillReceiveProps(nextProps) { }
  render() {
    return (
      <div>HocTester
          <input></input>
      </div>
    );
  }
}
HocTester.propTypes = {};
HocTester.defaultProps = {};
export default HocTester;
