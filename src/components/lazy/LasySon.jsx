import React, { Component } from 'react';
import propTypes from 'prop-types';
// import { } from 'antd';
// import './LazySon.scss';
import { log, delay } from '../../utils/debugTools'

class LazySon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // componentDidMount() {}
  // componentWillReceiveProps(nextProps) {}
  render() {
    delay()
    return (
      <div>
        <h4>LazySon</h4>
        <p>delayed 1 sec before render</p>
      </div>
    );
  }
}
LazySon.propTypes = {};
LazySon.defaultProps = {};
export default LazySon;
